import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import PhotoView from './PhotoView';
import { Typography } from '@material-ui/core';
import * as photoActions from '../actions/PhotoActions';
import FullScreen from './FullScreen';

class PhotoAlbum extends React.Component {
    state = {
        viewing: -1
    }

    handleClose(){
        this.setState({viewing: -1});
    }

    clickImage(id){
        this.setState({viewing: id});
    }

    deletePhoto(id){
        localStorage.setItem("images", 
            localStorage.getItem("images")
                        .split(" ")
                        .filter(image => {
                            return image.slice(0, image.indexOf(":")) != id;
                        })
                        .join(" ")
        )
        this.props.deletePhoto(id);
    }

    componentDidMount(prevState){
        // const { image } = this.props.match.params.image;
        // if(image && image != prevState.viewing){
        //     this.setState({viewing: image});
        // } else if(!image){
        //     this.setState({viewing: -1});
        // }
        let images = localStorage.getItem("images");
        if(images){
            images.split(" ").forEach(file => {
                this.props.uploadPhoto(file.slice(file.indexOf(":") + 1));
            })
        }
    }

    // componentDidUpdate(prevProps){
    //     let pic = this.props.match.params.image;
    //     if(pic && pic != prevProps.match.params.image){
    //         this.setState({viewing: pic});
    //     }
    // }

    render(){
        let image = this.props.match.params.image;
        if(image && image !== this.state.viewing){
            this.clickImage(image);
        } else if(!image && this.state.viewing !== -1){
            this.clickImage(-1);
        }
        if(this.props.photoList){
            if(this.state.viewing >= 0){
                let pic = this.props.photoList.filter(photo => 
                    photo.id == this.state.viewing
                );
                if(pic.length){
                    let prev = this.props.photoList[this.props.photoList.indexOf(pic[0]) - 1];
                    let next = this.props.photoList[this.props.photoList.indexOf(pic[0]) + 1];
                    return (
                        <FullScreen 
                            image={pic[0]} 
                            prevId={prev ? prev.id : 0} 
                            nextId={next ? next.id : -1}
                            handleDelete={this.deletePhoto.bind(this)}
                        />
                    );
                } else {
                    return null;
                }
            } else {
                return (
                    <PhotoView 
                        photoList={this.props.photoList} 
                        viewing={this.state.viewing}
                        handleClick={this.clickImage.bind(this)}
                        handleClose={this.handleClose.bind(this)}
                    />
                );
            }
        } else {
            return (
                <Typography variant="display1">No Photos Found :(</Typography>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        photoList: state.photo.photos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //toggleDrawer: () => { dispatch(commonActions.toggleNavOpen()) }
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file));},
        deletePhoto: id => { dispatch(photoActions.deletePhoto(id)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum);