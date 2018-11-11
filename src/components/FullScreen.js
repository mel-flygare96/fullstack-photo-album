import React from 'react';
import { withStyles, Button, Grid } from '@material-ui/core';
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
    }
});

const FullScreen = ({
    classes,
    image,
    prevId,
    nextId,
    handleDelete
}) => {
    console.log(image.id - 1)
    return (
        <div className={classes.root}>
            <div className={classes.view}>
                <div className={classes.buttonContainer}>
                    <Button component={Link} className={classes.button} style={{float: 'left'}} to={"/" + prevId}>
                        <ArrowLeft style={{fontSize: 80}} />
                    </Button>  
                </div>
                <div style={{flexGrow: 2, display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <div className={classes.toolBar}>
                        <Grid container style={{height: '100%'}}>
                            <Grid item sm={10} />
                            <Grid item sm={1}>
                            {/* TODO: implement image deletion */}
                                <Button component={Link} to="/" style={{color: 'white', height: '100%'}}>
                                    <DeleteIcon style={{fontSize: 40}} onClick={() => handleDelete(image.id)}/>
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
                    <div className={classes.toolBar}></div>
                </div>
                <div className={classes.buttonContainer}>
                    <Button component={Link} className={classes.button} style={{float: 'right'}} to={"/" + nextId}>
                        <ArrowRight style={{fontSize: 80}} />
                    </Button>      
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(FullScreen);