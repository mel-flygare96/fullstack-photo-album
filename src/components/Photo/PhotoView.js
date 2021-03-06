import React from 'react';
import { Grid, withStyles, GridList, GridListTile, Typography } from '@material-ui/core';
import Photo from './Photo';
import ImageUpload from '../Common/ImageUpload';
import FullScreen from './FullScreen';

const styles = theme => ({
    root: {
        //width: '90%',
        marginTop: 50,
        //flexGrow: 2,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
        // marginLeft: '5%',
        // marginRight: '5%'
        //minHeight: 'calc(100vh - 72px)'
    },
    grid: {
        width: '90%',
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
    },
    noPhoto: {
        height: '100%',
        display: 'flex',    
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Presentational component for rendering a grid of photos
const PhotoView = ({
    classes,
    list,
    type,
    albumID,
}) => {
    console.log(list)
    if(Object.keys(list).length){
        return (
            <div className={classes.root}>
                <GridList cellHeight={300} cols={4} className={classes.grid}>
                    {Object.values(list).map(photo => {
                            return (
                                <GridListTile 
                                    key={photo.id} 
                                    cols={1} 
                                    classes={{
                                        tile: classes.tile
                                    }} 
                                    className={classes.gridItem}
                                >
                                    <Photo 
                                        image={photo.photo}
                                        id={photo.id}
                                        type={type}
                                        albumID={albumID}
                                    />
                                </GridListTile>
                            );
                        })
                    }
                    {/* <GridListTile cols={1} className={classes.gridItem}>
                        <ImageUpload />
                    </GridListTile> */}
                </GridList>
                <ImageUpload type={type} albumID={albumID}/>
            </div>
        );
    } else {
        return (
            <div className={classes.noPhoto}>
                <Typography variant="h2">No Photos Found :(</Typography>
                <ImageUpload type={type} albumID={albumID}/>
            </div>
        )        
    }
}

export default withStyles(styles)(PhotoView);