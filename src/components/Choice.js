import React, { Component } from 'react';

export class Choice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
      <h2>{this.props.ChoiceTitle}</h2>
        <div className="col-6" >
          <button onMouseDown={this.props.lessLess} onClick={this.props.addOne} onMouseUp={this.props.stopLess}>LESS</button>
          <button onMouseDown={this.props.moreMore} onClick={this.props.addOne} onMouseUp={this.props.stopMore}>MORE</button>
        </div>
      </div>
    )
  };
}

export default Choice;
