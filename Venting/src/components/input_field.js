import React, { Component } from 'react';
import Util from '../util';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      statement: '',
      sentences: [],
    };
  }

  handleEnter(event) {
    if (event.charCode === 13) {
      this.state.sentences.unshift(this.state.statement);
      this.setState({ statement: '' });
    }
  }

clearSentences() {
  this.setState({ sentences: [] });
}

  render() {
    return (
      <div>
        <input
          value={this.state.statement}
          onChange={ event => this.setState({ statement: event.target.value }) }
          onKeyPress={ event => this.handleEnter(event) }
        />
      <button
        className="clear-btn"
        onClick={e => this.clearSentences()}>
        START OVER
      </button>
      <p>{this.state.statement}</p>
      <ul className="sentence-list">
        {this.state.sentences.map( (sentence, index) => (
          <li key={index} className="sentence-list-item">
            {Util.emotionize(sentence)}
          </li>
        ))}
      </ul>
     </div>
    );
  }
}

export default InputField;
