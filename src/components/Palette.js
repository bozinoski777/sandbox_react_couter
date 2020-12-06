import React, { Component } from 'react';

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }

  render() {
  const myStyle = {height: this.state.height + "px"};
    return (
      <div className="row">
        <div className="col-6" >
          <button onMouseDown={this.props.lessLess} onClick={this.props.addOne} onMouseUp={this.props.stopLess}>LESS</button>
          <button onMouseDown={this.props.moreMore} onClick={this.props.addOne} onMouseUp={this.props.stopMore}>MORE</button>
        </div>
        <div className="col-6">
          <div style={myStyle} className="filling container" ></div>
        </div>
      </div>
    )
  };
}

export default Palette;
