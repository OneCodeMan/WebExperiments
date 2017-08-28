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
     </div>
    );
  }
}

export default InputField;
