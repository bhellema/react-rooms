import React, {Component} from 'react';
import { connect } from 'react-redux';

import HeaderBar from './components/header/HeaderBar';
import Rooms from './components/rooms/Rooms';
import logo from './logo.svg';
import './App.css';

/* Request to load data */
import {loadRooms} from './actions/rooms.actions';


class App extends Component {

    componentDidMount() {
        // console.log("------------- componentDidMount ----------------");
        // this.props.loadRooms();
    }

    loadRooms() {
        this.props.loadRooms();
    }

    render() {
        return (
            <div className="App">
                <button type='button' onClick={() => this.loadRooms()}>Load Rooms</button>
                <HeaderBar title="React Rooms" logo={logo}/>
                <Rooms/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadRooms: () => {
            dispatch(loadRooms)
        }
    }
};

export default connect(null, mapDispatchToProps)(App);