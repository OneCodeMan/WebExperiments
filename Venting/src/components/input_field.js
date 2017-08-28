import React, { Component } from 'react';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      statement: '',
      sentences: []
    };
  }

  handleEnter(event) {
    if (event.charCode === 13) {
      this.state.sentences.push(this.state.statement);
      this.setState({ statement: '' });
      console.log(this.state.sentences);
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.statement}
          onChange={ event => this.setState({ statement: event.target.value }) }
          onKeyPress={ event => this.handleEnter(event) }
        />
      <p>{this.state.statement}</p>
      <ul className="sentence-list">
        {this.state.sentences.map( (sentence, index) => {
            return (
              <li key={index} className="sentence-list-item">
                {sentence}
              </li>
            );
        })}
      </ul>
     </div>
    );
  }
}

export default InputField;
