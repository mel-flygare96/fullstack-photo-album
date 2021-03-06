import React from 'react';
import { 
    withStyles, 
    Button, 
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    button: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        flexGrow: 2,
    },
    paper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    card: {
        width: 800,
        height: 600,
        maxWidth: 800
    }
});

// presentational component to render a single photo box
const Photo = ({
    classes,
    image,
    id,
    type,
    albumID
}) => {
    // TODO: Don't use card for image display, make display full screen
    return (
        <Button className={classes.button} component={Link} to={type === "album" ? "/album/" + albumID + "/" + id : "/photo/" + id}>
            <img src={image} alt={image} style={{height: 300}}/>
        </Button>
    );
}

export default withStyles(styles)(Photo);