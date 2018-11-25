import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import Album from '../Album/Album';
import PhotoView from './PhotoView';
import AlbumView from '../Album/AlbumView';
import { Typography } from '@material-ui/core';
import * as photoActions from '../../actions/PhotoActions';
import FullScreen from './FullScreen';

class PhotoAlbum extends React.Component {
    state = {
        viewing: -1,
        open: false
    }

    handleClose = () => {
        this.setState({viewing: -1});
    }

    clickImage = id => {
        this.setState({viewing: id});
    }

    deletePhoto = id => {
        localStorage.setItem("images", 
            localStorage.getItem("images")
                        .split(" ")
                        .filter(image => {
                            return image.slice(0, image.indexOf(":")) != id;
                        })
                        .join(" ")
        )
        this.closeDialog();
        this.props.deletePhoto(id);
    }

    openDialog = () => {
        this.setState({open: true});
    }

    closeDialog = () => {
        this.setState({open: false});
    }

    componentDidMount = () => {
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
        let id = this.props.match.params.id;
        console.log(id)

        //let TileType = (type === "album" && image === undefined ? Album : Photo);
        if(id && id !== this.state.viewing){
            this.clickImage(id);
        } else if(!id && this.state.viewing !== -1){
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
                            handleDelete={this.deletePhoto}
                            closeDialog={this.closeDialog}
                            openDialog={this.openDialog}
                            open={this.state.open}
                            type={"photo"}
                        />
                    );
                } else {
                    return null;
                }
            } else {
                return (
                    <PhotoView 
                        list={this.props.photoList} 
                        type={"photo"}
                        albumID={-1}
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
        albumList: state.album.albums,
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