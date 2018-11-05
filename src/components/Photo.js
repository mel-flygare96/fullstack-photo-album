import React from 'react';
import { Grid, withStyles, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
    frame: {
        width: 300,
        height: 300,
        alignItems: 'center',
    },
    paper: {
        width: '100%',
        height: '100%'
    }
});

const Photo = ({
    classes,
}) => {
    return (
        <div className={classes.frame}>
            <Paper className={classes.paper}>
                <Typography variant="h1">Hi</Typography>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Photo);