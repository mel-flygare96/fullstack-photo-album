import React from 'react';
import { Grid, withStyles, GridList, GridListTile } from '@material-ui/core';

const styles = theme => ({
    root: {
        //width: '100%',
        marginTop: theme.spacing.unit,
        //flexGrow: 2,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        overflow: 'hidden'
        //minHeight: 'calc(100vh - 72px)'
    },
    grid: {
        width: '80%',
        //maxWidth: 1200,
        margin: 0,
        //minHeight: 300
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

const PhotoView = ({
    classes,
    photoList
}) => {
    return (
        <div className={classes.root}>
            <GridList cellHeight={300} cols={4} className={classes.grid}>
                {photoList.map(photo => {
                        return (
                            <GridListTile key={photo.num} cols={1} className={classes.gridItem}>
                                {photo.photo}
                            </GridListTile>
                        );
                    })
                }
            </GridList>
        </div>
    );
}

export default withStyles(styles)(PhotoView);