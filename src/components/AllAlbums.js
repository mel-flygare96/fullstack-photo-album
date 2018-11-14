import react from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import Album from './Album';
import PhotoView from './PhotoView';
import AlbumView from './AlbumView';
import { Typography } from '@material-ui/core';
import * as photoActions from '../actions/PhotoActions';
import * as albumActions from '../actions/AlbumActions';
import FullScreen from './FullScreen';

class AllAlbums extends React.Component {

    state = {
        viewing: -1,
        open: false
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
        this.props.closeDialog();
        this.props.deletePhoto(id);
    }

    openDialog(){
        this.setState({open: true});
    }

    closeDialog(){
        this.setState({open: false});
    }

    createAlbum(name){
        this.props.createAlbum(name);
    }

    componentDidMount(){
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
    render(){
        let albumID = this.props.match.params.id;
        let image = this.props.match.params.image;
        if(albumID){
            let album = this.props.albumList.filter(item => item.id == albumID);
            let photos = album.length ? this.props.photoList.filter(photo => album[0].photos.includes(photo.id)) : [];
            if(image){
                let pic = photos.filter(photo => photo.id == image);
                if(pic.length){
                    let prev = photos[photos.indexOf(pic[0]) - 1];
                    let next = photos[photos.indexOf(pic[0]) + 1];
                    return (
                        <FullScreen 
                            image={pic[0]} 
                            prevId={prev ? prev.id : 0} 
                            nextId={next ? next.id : -1}
                            handleDelete={this.deletePhoto.bind(this)}
                            closeDialog={this.closeDialog.bind(this)}
                            openDialog={this.openDialog.bind(this)}
                            open={this.state.open}
                            type={"album"}
                            albumID={albumID}
                        />
                    );
                }
            }
            return (
                <PhotoView 
                    list={photos}
                    type="album"
                    albumID={albumID}
                />
            )
        }
        return (
            <AlbumView
                albumList={this.props.albumList}
                photoList={this.props.photoList}
                createAlbum={this.createAlbum.bind(this)}
            />
        );
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
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file));},
        createAlbum: name => { dispatch(albumActions.createAlbum(name));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);