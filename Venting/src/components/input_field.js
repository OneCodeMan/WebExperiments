import React, { Component } from 'react';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      statement: ''
    };
  }


  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ statement: event.target.value }) }
        />
     </div>
    );
  }
}

export default InputField;
