import React from 'react';
import { connect } from 'react-redux';
import * as commonActions from '../../actions/CommonActions';
import Navbar from './Navbar';
import NavMenu from './NavMenu';

class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
                <Navbar toggleDrawer={this.props.toggleDrawer}/>
                <NavMenu navOpen={this.props.navOpen} toggleDrawer={this.props.toggleDrawer} />
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);