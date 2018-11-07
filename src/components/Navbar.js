import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        textAlign: 'left'
    },
    navbar: theme.mixins.toolbar,
});

const Navbar = ({
    classes,
    toggleDrawer
}) => {
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="Menu" 
                        onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Look, Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* below used to create spacing below app bar*/}
            <div className={classes.navbar}/>
        </div>
    );
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(Navbar);