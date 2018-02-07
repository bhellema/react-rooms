import React, { Component } from 'react';

import HeaderBar from './components/header/HeaderBar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar title="React Rooms" logo={logo}/>
      </div>
    );
  }
}

export default App;
