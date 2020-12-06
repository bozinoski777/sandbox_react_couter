import React, { Component } from 'react';

export class JarFood extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 10
    }
  }

  allThings = () => {

  }

  render() {
    const myStyle = {height: this.state.height + "px"};
    return (
      <div style={myStyle} className="filling container" ></div>
    )
  };
}

export default JarFood;
