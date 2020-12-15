import React, { Component } from 'react';

export class JarFood extends Component {
  constructor(props) {
    super(props);
    }


  // lessSess = () => {
  //   this.interval = setInterval(() => this.setState({ height: this.state.height - 1}), 1);
  // };
  // stopSess = () => {
  //   clearInterval(this.interval);
  // };

  render() {
    // const myStyle = ;
    return (
      <div style={{height: this.props.quantity + "px", backgroundImage: "url(" + this.props.selectedFoods + ")"}} className="filling container" ></div>
    )
  };
}

export default JarFood;
