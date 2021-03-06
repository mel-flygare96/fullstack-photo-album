import React from 'react';
import { connect } from 'react-redux';
import { 
    TextField, 
    withStyles, 
    Button, 
    Input, 
    Typography, 
    Dialog, 
    DialogTitle, 
    DialogActions, 
    DialogContent,
    DialogContentText 
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as albumActions from '../../actions/AlbumActions';

// CSS in JS styles for this component
const styles = theme => ({
    container: {
        height: '100%',
        //width: 300,
        //height: 100,
    },
    button: {
        width: '100%',
        height: '100%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        marginBottom: theme.spacing.unit
    },
});

// Save the album to local storage
const saveAlbum = (name, id) => {
    let savedAlbum = localStorage.getItem("album-" + id);
    if(!savedAlbum){
        localStorage.setItem("album-" + id, id + "|" + name + "|");
    }
}

// Form to create a new album
// Using a class since the data can be handled with redux,
// so we don't need to pass data to parents
class CreateAlbumForm extends React.Component {
    state = {
        name: '',
        open: false
    }

    // Save the changes to the name textField
    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    // Create the album from the value of the textField, saving it to local storage
    handleSubmit = name => {
        this.props.createAlbum(-1, name, []);
        this.setState({name: ""});
        console.log(this.props.nextID)
        saveAlbum(name, this.props.nextID);
        this.closeForm();
    }

    // Open the dialog to create the album
    openForm = () => {
        this.setState({open: true});
    }

    // Close the dialog to create the album
    closeForm = () => {
        this.setState({open: false});
    }

    render(){
        const { classes } = this.props;
        console.log(this.props.nextID)
        return (
            <div className={classes.container}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={this.openForm}>
                    <AddIcon style={{fontSize: 50}}/>
                </Button>
                <Dialog className={classes.dialog} open={this.state.open} aria-labelledby="create-album-title">
                <DialogTitle id="create-album-title">
                    Enter Album Name
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the album name
                    </DialogContentText>
                    <TextField 
                        id="name"
                        label="name"
                        //className={classes.textField}
                        value={this.state.name}
                        margin="dense"
                        onChange={this.handleChange}
                        autoFocus
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.closeForm}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => this.handleSubmit(this.state.name)}>
                        Create Album
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const styledForm = withStyles(styles)(CreateAlbumForm);

const mapStateToProps = state => {
    return {
        albumList: state.album.albums,
        nextID: state.album.nextId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //uploadPhoto: file => { dispatch(photoActions.uploadPhoto(file));},
        createAlbum: (id, name, photos) => { dispatch(albumActions.createAlbum(id, name, photos)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(styledForm);