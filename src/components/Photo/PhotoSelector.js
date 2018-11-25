import React from 'react';
import ClassNames from 'classnames';
import { 
    Checkbox, 
    withStyles, 
    Button, 
    GridList, 
    GridListTile, 
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle 
} from '@material-ui/core';

const styles = theme => ({
    checkbox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 130,
    },
    checkboxChecked: {
        background: theme.palette.secondary.main
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    tile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

const PhotoCheckbox = ({
    classes,
    image,
    checked
}) => {
    return (
        <div className={ClassNames(classes.checkbox, { 
                            [classes.checkboxChecked]: checked
                        })}
        >
            <img style={{width: 120, height: 120, margin: 'auto'}} src={image} alt={image}/>
        </div>
    );
}

const PhotoSelector = ({
    classes,
    open,
    photoList,
    albumPhotos,
    handleChange,
    handleSubmit,
    closeDialog
}) => {
    return (
        <div className={classes.root}>
            <Dialog open={open}>
                <DialogContent>
                    <GridList cellHeight={150} cols={4}>
                        {photoList.map(photo => {
                            return (
                                <GridListTile
                                    key={photo.id} 
                                    cols={1} 
                                    classes={{
                                        tile: classes.tile
                                    }} 
                                    className={classes.gridItem}
                                >
                                    <Checkbox
                                        style={{width: 150, height: 150, padding: 0}} 
                                        checked={albumPhotos.includes(photo.id)}
                                        onChange={handleChange(photo.id)}
                                        icon={
                                            <PhotoCheckbox 
                                                classes={classes}
                                                image={photo.photo} 
                                                checked={false} 
                                            />
                                        }   
                                        checkedIcon={
                                            <PhotoCheckbox 
                                                classes={classes}
                                                image={photo.photo} 
                                                checked={true} 
                                            />
                                        }
                                    />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                    <Button color="primary" onClick={closeDialog}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(PhotoSelector);