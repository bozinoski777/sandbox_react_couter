import React, { Component } from 'react';

export class JarFood extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 0
    }
  }
  moreSore = () => {
    this.interval = setInterval(() => this.setState({ height: this.state.height + 1}), 1);
  };
  stopSore = () => {
    clearInterval(this.interval);
  };
  lessSess = () => {
    this.interval = setInterval(() => this.setState({ height: this.state.height - 1}), 1);
  };
  stopSess = () => {
    clearInterval(this.interval);
  };

  render() {
    const myStyle = {height: this.state.height + "px"};
    return (
      <div style={myStyle} className="filling container" ></div>
    )
  };
}

export default JarFood;
