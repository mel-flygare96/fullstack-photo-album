import React from 'react';
import { connect } from 'react-redux';
import PhotoView from './PhotoView';
import * as photoActions from '../../actions/PhotoActions';
import FullScreen from './FullScreen';

/* 
    Primary container for the 'All Photos' view. 
*/
class PhotoAlbum extends React.Component {
    state = {
        viewing: -1,
        open: false
    }

    // Close the fullscreen view
    handleClose = () => {
        this.setState({viewing: -1});
    }

    // Set the viewing id to the clicked photo
    clickImage = id => {
        this.setState({viewing: id});
    }

    // delete the photo with the matching id
    deletePhoto = id => {
        localStorage.removeItem("photo-" + id);
        this.closeDialog();
        this.props.deletePhoto(id);
    }

    // open the deletion dialog
    openDialog = () => {
        this.setState({open: true});
    }

    // close the deletion dialog
    closeDialog = () => {
        this.setState({open: false});
    }

    // When component moints, load all unloaded photos
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
        // if looking at a new image, set viewing id to id of url param
        if(id && id !== this.state.viewing){
            this.clickImage(id);
        // if viewing all photos, set viewing id to -1 for no photo
        } else if(!id && this.state.viewing !== -1){
            this.clickImage(-1);
        }
        // if we are viewing a photo
        if(this.state.viewing >= 0){
            // get photo being viewed
            let pic = this.props.photoList[this.state.viewing];
            if(pic){
                // get previous photo in list
                let prev = Object.keys(this.props.photoList)[Object.keys(this.props.photoList).indexOf(this.state.viewing) - 1];
                // get next photo in list
                let next = Object.keys(this.props.photoList)[Object.keys(this.props.photoList).indexOf(this.state.viewing) + 1];
                return (
                    // display the fullscreen photo view component
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
            // show all photos
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
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file));},
        deletePhoto: id => { dispatch(photoActions.deletePhoto(id)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum);