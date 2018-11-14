import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import theme from './theme';
import PhotoAlbum from './components/PhotoAlbum';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
                <div className="App">
                    <Switch>
                        <Route exact path='/:image?' component={PhotoAlbum} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
