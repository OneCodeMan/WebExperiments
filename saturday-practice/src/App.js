import React, { Component } from 'react';
import './App.css';
import CoolGradient from './components/CoolGradient';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoolGradient text="Hello there"/>
      </div>
    );
  }
}

export default App;
