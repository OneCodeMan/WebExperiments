import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Intro from './components/intro';
import InputNumber from './components/input_number';
import FactList from './components/fact_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'number': 5,
      'fact': '',
    }

    this.getFact(this.state.number);

  };

  getFact(number) {
    if (number) {
      request
        .get(`http://numbersapi.com/${number}?json`)
        .end((err, res) => {

          let factObject = JSON.parse(res.text);
          let factText = factObject.text;

          this.setState({
            number: number,
            fact: factText,
          });

        });
      } else {
        this.setState({
          fact: "Not a valid number!",
        });
      }

  }

  render() {
    return (
      <div className="App">
        <Intro />
        <InputNumber
          number={this.state.number}
          onInputNumberChange={number => this.getFact(number)}
        />
      <FactList fact={this.state.fact} />
      </div>
    );
  }
}

export default App;
