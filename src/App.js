import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import theme from './theme';
import AllPhotos from './components/AllPhotos';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={AllPhotos} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
