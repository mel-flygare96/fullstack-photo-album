import React from 'react';
import { Grid, withStyles, Paper, Typography, Button } from '@material-ui/core';

const styles = theme => ({
    frame: {
        // width: 300,
        // height: 300,
    },
    paper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }
});

const Photo = ({
    classes,
    image
}) => {
    return (
        <Button>
            <img src={image} alt={image} style={{width: 300, height: 300}}/>
        </Button>
    );
}

export default withStyles(styles)(Photo);