import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';

// CSS in JS styles for this component
const styles = theme => ({
    list: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
    navItems: {

    }
});

// Presentational component for the nav menu drawer on the app bar
const NavMenu = ({
    classes,
    navOpen,
    toggleDrawer
}) => {

    // List of navigation items for the nav menu
    const navItems = (
        <div className={classes.list}>
            <List component="nav">
                <ListItem button component={Link} to='/photo'>
                    <ListItemText primary="All Photos" />
                </ListItem>
                <ListItem button component={Link} to='/album'>
                    <ListItemText primary="Albums" />
                </ListItem>
                <ListItem button component={Link} to='/'>
                    <ListItemText primary="Suggestions" />
                </ListItem>
            </List>
        </div>
    );

    console.log(navOpen);

    return (
        <div>
            <Drawer anchor="left" open={navOpen} onClose={toggleDrawer}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    {navItems}
                </div>
            </Drawer>
        </div>
    );
}

NavMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    navOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(NavMenu);