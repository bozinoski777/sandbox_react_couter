import React, { Component } from 'react';

export class JarFood extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 10
    }
  }
  moreMore = () => {
    this.interval = setInterval(() => this.setState({ height: this.state.height + 1}), 1);
  };
  stopMore = () => {
    clearInterval(this.interval);
  };
  lessLess = () => {
    this.interval = setInterval(() => this.setState({ height: this.state.height - 1}), 1);
  };
  stopLess = () => {
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
