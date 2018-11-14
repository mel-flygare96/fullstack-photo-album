import React from 'react';
import { 
    withStyles, 
    Button, 
    Grid, 
    Chip, 
    Typography,
    Paper, 
    Dialog, 
    DialogTitle, 
    DialogActions, 
    DialogContent ,
    DialogContentText
} from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import CloseIcon from '@material-ui/icons/CloseRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
        background: '#263238',
        width: '100%',
        height: '100%',
        marginTop: -5
        //minHeight: 'calc(100vh - 72px)'
    },
    buttonContainer: {
        height: '100%', 
        width: 100,
        display: 'flex', 
        flexDirection: 'column'
    },
    button: {
        height: '100%',
        color: 'white',
    },
    view: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    toolBar: {
        height: 100
    },
    tags: {
        height: 100,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    chip: {
        margin: theme.spacing.unit,
        //marginRight: theme.spacing.unit * 2
    }
});

const FullScreen = ({
    classes,
    image,
    prevId,
    nextId,
    handleDelete,
    closeDialog,
    openDialog,
    open
}) => {
    console.log(image.id - 1)
    return (
        <div className={classes.root}>
            <div className={classes.view}>
                <div className={classes.buttonContainer}>
                    <Button disabled={!prevId} component={Link} className={classes.button} style={{float: 'left'}} to={"/" + prevId}>
                        <ArrowLeft style={{fontSize: 80}} />
                    </Button>  
                    <Dialog open={open} onClose={closeDialog} aria-labelledby="title" aria-describedby="description">
                        <DialogTitle id="title">Delete Photo?</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="description">
                                Are you sure you want to delete this photo?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>
                                No
                            </Button>
                            <Button component={Link} to="/" onClick={() => handleDelete(image.id)}>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div style={{flexGrow: 2, display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <div className={classes.toolBar}>
                        <Grid container style={{height: '100%'}}>
                            <Grid item sm={10} />
                            <Grid item sm={1}>
                                <Button style={{color: 'white', height: '100%'}}>
                                    <DeleteIcon style={{fontSize: 40}} onClick={openDialog}/>
                                </Button>
                            </Grid>
                            <Grid item sm={1}>
                                <Button component={Link} to="/" style={{color: 'white', height: '100%'}}>
                                    <CloseIcon style={{fontSize: 40}} />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <img src={image.photo} alt={image.photo} style={{margin: 'auto', maxWidth: 800}}/>  
                        <Paper className={classes.tags}>
                            <Typography variant="display1" style={{marginRight: 12, marginLeft: 8}}>Tags</Typography>
                            {["test1", "test2", "test3", "test4"].map(chip => {
                                return <Chip clickable variant="outlined" label={chip} className={classes.chip}></Chip>;
                            })}
                        </Paper>
                </div>
                <div className={classes.buttonContainer}>
                    <Button disabled={nextId === -1} component={Link} className={classes.button} style={{float: 'right'}} to={"/" + nextId}>
                        <ArrowRight style={{fontSize: 80}} />
                    </Button>      
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(FullScreen);