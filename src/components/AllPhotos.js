import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import PhotoView from './PhotoView';
import { Typography } from '@material-ui/core';
import * as photoActions from '../actions/PhotoActions';

class AllPhotos extends React.Component {
    componentDidMount(){
        let images = localStorage.getItem("images");
        if(images){
            images.split(" ").forEach(file => {
                this.props.uploadPhoto(file);
            })
        }
    }
    render(){
        console.log(this.props.photoList)
        if(this.props.photoList){
            return (
                    <PhotoView photoList={this.props.photoList} />
                );
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
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);