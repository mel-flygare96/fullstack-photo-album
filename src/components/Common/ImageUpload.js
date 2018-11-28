import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, SvgIcon, Input, withStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddToPhotos from '@material-ui/icons/AddToPhotos';
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';
import PhotoSelector from '../Photo/PhotoSelector';
import * as photoActions from '../../actions/PhotoActions';
import * as albumActions from '../../actions/AlbumActions';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';

const styles = theme => ({
    button: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
        margin: theme.spacing.unit,
        width: 80,
        height: 80,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
        //width: 80,
        //height: 80
    },
})

const savePhoto = (src, id) => {
    let savedPhoto = localStorage.getItem("photo-" + id);
    if(!savedPhoto){
        localStorage.setItem("photo-" + id, id + "|" + src);
    }
}

const saveAlbum = (id, photos) => {
    let savedAlbum = localStorage.getItem("album-" + id);
    if(savedAlbum){
        let name = savedAlbum.split("|")[1];
        localStorage.setItem("album-" + id, id + "|" + name + "|" + photos.toString());
    }
}

class ImageUpload extends React.Component {
    state = {
        open: false,
        dOpen: false,
        albumPhotos: []
    }
    fileUpload (input, albumID) {
        if(input && input.files){
            let reader = new FileReader();
            let upload = this.props.uploadPhoto.bind(this);
            let nextId = this.props.nextId;
            reader.onload = (function(file) {
                return function(e){
                    savePhoto(e.target.result, nextId);
                    upload([-1, e.target.result]);
                }
            })(input.files[0]);
            reader.readAsDataURL(input.files[0]);
        }
        if(albumID){
            let photos = this.props.albumList[albumID].photos;
            photos.push(this.props.nextId);
            let albumPhotos = this.state.albumPhotos;
            albumPhotos.push(this.props.nextId);
            this.setState({albumPhotos: albumPhotos});
            saveAlbum(albumID, this.state.albumPhotos);
            this.props.addToAlbum(photos, albumID);
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    openDialog = e => {
        console.log("opening")
        e.stopPropagation();
        this.setState({dOpen: true});
    }

    closeDialog = () => {
        this.setState({dOpen: false});
    }

    selectPhoto = id => event => {
        console.log(id)
        if(event.target.checked){
            let newAlbum = this.state.albumPhotos;
            newAlbum.push(id);
            this.setState({albumPhotos: newAlbum});
        } else {
            let newAlbum = this.state.albumPhotos;
            newAlbum.splice(newAlbum.indexOf(id), 1);
            this.setState({albumPhotos: newAlbum});
        }
    }

    componentDidMount = () => {
        if(this.props.type === "album"){
            if(this.props.albumList[this.props.albumID]){
                this.props.albumList[this.props.albumID].photos.forEach(photo => {
                    let newAlbum = this.state.albumPhotos;
                    newAlbum.push(photo);
                    this.setState({albumPhotos: newAlbum});
                })
            }
        }
    }

    handleSubmit = () => {
        saveAlbum(this.props.albumID, this.state.albumPhotos);
        this.props.addToAlbum(this.state.albumPhotos, this.props.albumID);
        this.closeDialog();
    }

    render(){
        const { classes } = this.props;
        const { type } = this.props;
        const { albumID } = this.props;
        let album;
        console.log(this.state.albumPhotos)
        if(type === "album"){
            album = this.props.albumList[albumID];
            return (
                <div>
                    <input type="file" 
                        accept="image/*"
                        id="upload"
                        onChange={e => this.fileUpload(e.target, albumID)}
                        style={{
                            width: '0.1px',
                            height: '0.1px',
                            opacity: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            zIndex: -1,
                        }}
                    />
                    <SpeedDial
                        className={classes.speedDial}
                        ariaLabel="Album SpeedDial"
                        icon={<SpeedDialIcon />}
                        onBlur={this.handleClose}
                        onClick={this.handleClose}
                        onMouseEnter={this.handleOpen}
                        onMouseLeave={this.handleClose}
                        open={this.state.open}
                        direction="up"
                    >
                        <SpeedDialAction 
                            icon={<AddPhoto />}
                            tooltipTitle="Add Photo"
                            //onClick={this.handleClick}
                            component="label"
                            for="upload"
                        >
                        </SpeedDialAction>
                        <SpeedDialAction 
                            icon={<AddToPhotos />}
                            tooltipTitle="Add Photos to Album"
                            onClick={this.openDialog}
                        />
                    </SpeedDial>
                    <PhotoSelector 
                        open={this.state.dOpen}
                        photoList={this.props.photoList} 
                        albumPhotos={this.state.albumPhotos}
                        handleChange={this.selectPhoto}
                        handleSubmit={this.handleSubmit}
                        closeDialog={this.closeDialog}
                    />
                </div>
            );

        } 
        return (
            <Button 
                color="primary" 
                variant="fab" 
                aria-label="Add" 
                component="label" 
                for="upload" 
                className={classes.button}
            >

                <AddPhoto />
                <input type="file" 
                    accept="image/*"
                    id="upload"
                    onChange={e => this.fileUpload(e.target, undefined)}
                    style={{
                        width: '0.1px',
                        height: '0.1px',
                        opacity: 0,
                        overflow: 'hidden',
                        position: 'absolute',
                        zIndex: -1,
                    }}/>
            </Button>
        );
    }
}

const styledUpload = withStyles(styles)(ImageUpload);

const mapStateToProps = state => {
    return {
        nextId: state.photo.nextId,
        photoList: state.photo.photos,
        albumList: state.album.albums
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file)); },
        addToAlbum: (photoID, albumID) => { dispatch(albumActions.addToAlbum(photoID, albumID)); }
    }
}

ImageUpload.propTypes = {
    classes: PropTypes.object.isRequired,
    nextId: PropTypes.number.isRequired,
    photoList: PropTypes.object.isRequired,
    albumList: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(styledUpload);