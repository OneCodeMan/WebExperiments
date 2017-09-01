import React, { Component } from 'react';

class InputNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'number': this.props.number,
    };

  }

  onNumberChange(number) {
    this.setState({number});
    this.props.onInputNumberChange(number);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.number}
          onChange={ event => this.onNumberChange(event.target.value) }
          type="number"
          name="num"
        />
      </div>
    );
  }

};

export default InputNumber;
