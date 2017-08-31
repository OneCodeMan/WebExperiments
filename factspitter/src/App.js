import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro';
import InputNumber from './components/input_number';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <InputNumber />
      </div>
    );
  }
}

export default App;
