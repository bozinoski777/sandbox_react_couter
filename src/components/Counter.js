import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
  }

  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

  decrement = () => {
    this.setState({
      value: (this.state.value -1)
    })
  };

  increment = () => {
    this.setState({
      value: (this.state.value + 1)
    })
  };
}

export default Counter;
