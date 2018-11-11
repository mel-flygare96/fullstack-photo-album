import React from 'react';
import { 
    withStyles, 
    Button, 
    Dialog, 
    Card, 
    CardActionArea, 
    CardContent 
} from '@material-ui/core';
import FullScreen from './FullScreen';
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

const Photo = ({
    classes,
    image,
    id,
    viewing,
    handleClick,
    handleClose
}) => {
    // TODO: Don't use card for image display, make display full screen
    return (
        <Button className={classes.button} component={Link} to={"/" + id}>
            <img src={image} alt={image} style={{height: 300}}/>
        </Button>
    );
}

export default withStyles(styles)(Photo);