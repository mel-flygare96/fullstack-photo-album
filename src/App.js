import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import theme from './theme';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as commonActions from './actions/CommonActions';
import PhotoView from './components/PhotoView';
import Photo from './components/Photo';

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
                    <PhotoView photoList={[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => {return <Photo />})} />
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
