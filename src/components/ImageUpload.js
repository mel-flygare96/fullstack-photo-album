import React from 'react';
import { connect } from 'react-redux';
import { Button, SvgIcon, Input, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as photoActions from '../actions/PhotoActions';

const styles = theme => ({
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 8,
        right: theme.spacing.unit * 10,
        margin: theme.spacing.unit,
        width: 80,
        height: 80,
    }
})

class ImageUpload extends React.Component {
    fileUpload(input){
        if(input && input.files){
            let reader = new FileReader();
            let upload = this.props.uploadPhoto.bind(this);
            let nextId = this.props.nextId;
            reader.onload = (function(file) {
                return function(e){
                    upload(e.target.result);
                    let images = localStorage.getItem("images");
                    if(images){
                        localStorage.setItem("images", images + " " + nextId + ":" + e.target.result);
                    } else {
                        localStorage.setItem("images", nextId + ":" + e.target.result);
                    }
                }
            })(input.files[0]);
            reader.readAsDataURL(input.files[0]);
        }
    }
    render(){
        const { classes } = this.props;
        return (
            <Button 
                color="primary" 
                variant="fab" 
                aria-label="Add" 
                component="label" 
                for="upload" 
                className={classes.button}>

                <AddIcon />
                <input type="file" 
                    accept="image/*"
                    id="upload"
                    onChange={e => this.fileUpload(e.target)}
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
        nextId: state.photo.nextId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(styledUpload);