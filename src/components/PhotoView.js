import React from 'react';
import { Grid, withStyles, GridList, GridListTile } from '@material-ui/core';
import Photo from './Photo';
import ImageUpload from './ImageUpload';
import FullScreen from './FullScreen';

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
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        //maxWidth: 1200,
        margin: 0,
        //minHeight: 300
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    tile: {
        display: 'flex',
        width: '100%'
    }
});

const PhotoView = ({
    classes,
    photoList,
    viewing,
    handleClick,
    handleClose
}) => {
    return (
        <div className={classes.root}>
            <GridList cellHeight={300} cols={4} className={classes.grid}>
                {photoList.map(photo => {
                        return (
                            <GridListTile key={photo.id} cols={1} classes={{
                                tile: classes.tile
                            }} className={classes.gridItem}>
                                <Photo image={photo.photo}
                                    id={photo.id}
                                    handleClick={handleClick} 
                                    handleClose={handleClose}
                                    viewing={viewing}
                                />
                            </GridListTile>
                        );
                    })
                }
                {/* <GridListTile cols={1} className={classes.gridItem}>
                    <ImageUpload />
                </GridListTile> */}
            </GridList>
            <ImageUpload />
        </div>
    );
}

export default withStyles(styles)(PhotoView);