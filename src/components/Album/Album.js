import React from 'react';
import { 
    withStyles, 
    Button, 
    Dialog, 
    Card, 
    CardActionArea, 
    CardContent,
    Typography
} from '@material-ui/core';
import FullScreen from '../Photo/FullScreen';
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

/* 
    This presentational component renders a single album box
*/
const Album = ({
    classes,
    image,
    id,
}) => {
    return (
        <Button className={classes.button} component={Link} to={"/album/" + id}>
            {image != "" ?
                <img src={image} alt={image} style={{height: 300}}/>
            : <Typography variant="display1">No Photo</Typography>
            }
        </Button>
    );
}

export default withStyles(styles)(Album);