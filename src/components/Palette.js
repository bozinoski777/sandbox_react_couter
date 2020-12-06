import React, { Component } from 'react';

export class Palette extends Component {
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
      <div className="row">
        <div className="col-6" >
          <button onMouseDown={this.lessLess} onMouseUp={this.stopLess}>LESS</button>
          <button onMouseDown={this.moreMore} onMouseUp={this.stopMore}>MORE</button>
        </div>
        <div className="col-6">
          <div style={myStyle} className="filling container" ></div>
        </div>
      </div>
    )
  };
}

export default Palette;
