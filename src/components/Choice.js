import React, { Component } from 'react';

export class Choice extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="col-3">
      <h2>{this.props.ChoiceTitle}</h2>
      <img  onMouseDown={this.props.moreMore} onClick={this.props.addOne} onMouseUp={this.props.stopMore} src={this.props.ChoiceImg} style={{width: '200px'}} alt="" />
        <div className="col-6" >
          <button onMouseDown={this.props.lessLess} onClick={this.props.addOne} onMouseUp={this.props.stopLess}>LESS</button>
        </div>
      </div>
    )
  };
}

export default Choice;
