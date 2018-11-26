import React from 'react';
import { Grid, withStyles, GridList, GridListTile, Button, Icon, GridListTileBar } from '@material-ui/core';
import Album from './Album';
import AddIcon from '@material-ui/icons/Add';
import CreateAlbumForm from '../Common/CreateAlbumForm';

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
    }
});

const AlbumView = ({
    classes,
    albumList,
    photoList,
    createAlbum
}) => {
    // TODO: Implement ability to type name of album / change name / select photos
    console.log(albumList)
    return (
        <div className={classes.root}>
            <GridList cellHeight={300} cols={4} className={classes.grid}>
                {console.log(albumList)}
                {Object.values(albumList).map(album => {
                    let image = "";
                    if(album.photos.length){
                        image = Object.values(photoList).filter(photo => photo.id === album.photos[0]);
                    }
                    return (
                        <GridListTile 
                            key={album.id} 
                            cols={1} 
                            classes={{
                                tile: classes.tile
                            }} 
                            className={classes.gridItem}>
                            <Album 
                                image={image.length ? image[0].photo : ""}
                                id={album.id}
                            />
                            <GridListTileBar 
                                style={{textAlign: 'left'}}
                                title={album.name}
                                subtitle={<span>Photos: {album.photos.length}</span>}
                            />
                        </GridListTile>
                    );
                })
                }
                {/* <GridListTile cols={1} className={classes.gridItem}>
                    <ImageUpload />
                </GridListTile> */}
                <GridListTile>
                    {/* <Button color="secondary" style={{width: '100%', height: '100%'}} onClick={() => createAlbum('test')}>
                        <AddIcon style={{fontSize: 60}}/>
                    </Button> */}
                    <CreateAlbumForm/>
                </GridListTile>
            </GridList>
        </div>
    );
}

export default withStyles(styles)(AlbumView);