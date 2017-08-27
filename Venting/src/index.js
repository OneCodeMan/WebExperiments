import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputField from './components/input_field';
import Intro from './components/intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statements: ['d', 'sdsa'],
    };
  }

  render() {
    return (
      <div>
        <Intro />
        <InputField />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
