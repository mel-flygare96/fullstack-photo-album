import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import theme from './theme';
import PhotoAlbum from './components/Photo/PhotoAlbum';
import AllAlbums from './components/Album/AllAlbums';
import Header from './components/Common/Header';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
                <div className="App">
                    <Switch>
                        <Route exact path='/photo/:id?' component={PhotoAlbum} />
                        <Route exact path='/album/:id?/:image?' component={AllAlbums} />
                        <Route exact path='/' component={PhotoAlbum} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
