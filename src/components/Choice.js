import React, { Component } from 'react';

export class Choice extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="col-3 p-3" style={{position: 'relative'}}>
        <h2 style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                    position: 'absolute', top: '160px',
                    padding: '5px', color: 'white'}}>
                      {this.props.ChoiceTitle}
        </h2>
        <img onMouseDown={this.props.moreMore} onClick={this.props.addOne.bind(this)}
        onMouseUp={this.props.stopMore} src={this.props.ChoiceImg}
        style={{width: '200px', height: "200px", objectFit: 'cover'}} alt="" />
       {/* <button style={{position: 'absolute', left: '157px', top: '25px'}}
                onMouseDown={this.props.lessLess} onClick={this.props.addOne}
                onMouseUp={this.props.stopLess}>LESS</button>*/}
      </div>
    )
  };
}

export default Choice;
