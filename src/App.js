import React, { Component } from 'react';

import Header from './components/header/Header';
import HeaderBar from './components/header/HeaderBar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Rooms" logo={logo}/>
        <HeaderBar title="React Rooms" logo={logo}/>
      </div>
    );
  }
}

export default App;
