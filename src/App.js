import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import theme from './theme';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as commonActions from './actions/CommonActions';

class App extends Component {
    render() {
    console.log(this.props.navOpen)
    return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <header className="App-header">
                        <Navbar toggleDrawer={this.props.toggleDrawer}/>
                        <NavMenu navOpen={this.props.navOpen} toggleDrawer={this.props.toggleDrawer} />
                    </header>
                    <Paper style={{ marginTop: 100, marginLeft: 50, marginRight: 50, top: '50%' }}>
                        <Typography variant="h1" style={{ color: "black" }}>Placeholder</Typography>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        navOpen: state.common.navOpen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDrawer: () => { dispatch(commonActions.toggleNavOpen()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
