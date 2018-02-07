import React, { Component } from 'react';

import HeaderBar from './components/header/HeaderBar';
import Rooms from "./components/rooms/Rooms";

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
            <HeaderBar title="React Rooms" logo={logo}/>
            <Rooms/>
      </div>
    );
  }
}

export default App;
