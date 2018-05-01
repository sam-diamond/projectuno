import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UnoContent from './modules/uno-content/uno-content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Uno App</h1>
        </header>
        <p className="App-intro">Go away.</p>
        <UnoContent />
      </div>
    );
  }
}

export default App;
