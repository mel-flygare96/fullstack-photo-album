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
        localStorage.removeItem("photo-" + id);
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
        Object.keys(localStorage).forEach(key => {
            if(key.includes("photo")){
                let photo = localStorage.getItem(key).split("|");
                this.props.uploadPhoto(photo);
            }
        })
    }

    render(){
        let id = this.props.match.params.id;
        if(id && id !== this.state.viewing){
            this.clickImage(id);
        } else if(!id && this.state.viewing !== -1){
            this.clickImage(-1);
        }
        if(this.state.viewing >= 0){
            let pic = this.props.photoList[this.state.viewing];
            if(pic){
                let prev = Object.keys(this.props.photoList)[Object.keys(this.props.photoList).indexOf(this.state.viewing) - 1];
                let next = Object.keys(this.props.photoList)[Object.keys(this.props.photoList).indexOf(this.state.viewing) + 1];
                return (
                    <FullScreen 
                        image={pic} 
                        prevId={prev ? prev : 0} 
                        nextId={next ? next : -1}
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