import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit,
        flexGrow: 2,
        display: 'block',
        //minHeight: 'calc(100vh - 72px)'
    },
    grid: {
        width: '100%',
        margin: 0,
        //minHeight: 300
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const PhotoView = ({
    classes,
    photoList
}) => {
    return (
        <div className={classes.root}>
                {photoList.map((item, index) => {
                    if(!(index % 4)){
                        { console.log(photoList)}
                        return (
                            <Grid container spacing={24} className={classes.grid}>
                                {(index + 4) < photoList.length ? 
                                    photoList.slice(index, index+4).map(photo => {
                                        return (
                                            <Grid item sm={3} className={classes.gridItem}>
                                                {photo}
                                            </Grid>
                                        );
                                    })
                                    : photoList.slice(index).map(photo => {
                                        return (
                                            <Grid item sm={3} className={classes.gridItem}>
                                                {photo}
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        );
                    }
                })}
        </div>
    );
}

export default withStyles(styles)(PhotoView);