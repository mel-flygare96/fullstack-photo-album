import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';

const styles = theme => ({
    list: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
    navItems: {

    }
});

const NavMenu = ({
    classes,
    navOpen,
    toggleDrawer
}) => {

    const navItems = (
        <div className={classes.list}>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Test 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Test 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Test 3" />
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