import React, { Component } from 'react';

export class Filling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
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
      <div>
        <button onMouseDown={this.moreMore} onMouseUp={this.stopMore}>MORE</button>
        <button onMouseDown={this.lessLess} onMouseUp={this.stopLess}>LESS</button>
        <div style={myStyle} className="filling container" ></div>
      </div>
    )
  };



}

export default Filling;
