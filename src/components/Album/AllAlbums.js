import react from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import Album from './Album';
import PhotoView from '../Photo/PhotoView';
import AlbumView from './AlbumView';
import { Typography, TextField } from '@material-ui/core';
import * as photoActions from '../../actions/PhotoActions';
import * as albumActions from '../../actions/AlbumActions';
import FullScreen from '../Photo/FullScreen';

class AllAlbums extends React.Component {

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
        this.props.closeDialog();
        this.props.deletePhoto(id);
    }

    openDialog = () => {
        this.setState({open: true});
    }

    closeDialog = () => {
        this.setState({open: false});
    }

    createAlbum = (id, name, photos) => {
        this.props.createAlbum(id, name, photos);
    }

    componentDidMount(){
        Object.keys(localStorage).forEach(key => {
            if(key.includes("album")){
                let album = localStorage.getItem(key).split("|");
                this.createAlbum(parseInt(album[0]), album[1], album[2] ? 
                    album[2].split(',').map(id => parseInt(id))
                    : []
                );
            } else if(key.includes("photo")){
                let photo = localStorage.getItem(key).split("|");
                this.props.uploadPhoto(photo);
            }
        })
    }

    render(){
        let albumID = this.props.match.params.id;
        let image = this.props.match.params.image;
        if(albumID){
            let album = this.props.albumList[albumID];
            let photos = album ? Object.values(this.props.photoList).filter(photo => album.photos.includes(photo.id)) : [];
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
                            handleDelete={this.deletePhoto}
                            closeDialog={this.closeDialog}
                            openDialog={this.openDialog}
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
        nextID: state.album.nextId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadPhoto: photo => { dispatch(photoActions.uploadPhoto(photo));},
        createAlbum: (id, name, photos) => { dispatch(albumActions.createAlbum(id, name, photos));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);