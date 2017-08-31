import React, { Component } from 'react';

class InputNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'number': 0,
      'count': 1,
    };

  }

  render() {
    return (
      <div>
        <input />
        <input />
        <button>Go</button>
      </div>
    );
  }

};

export default InputNumber;
