import React, { Component } from 'react';
import JarFood from './JarFood'


export class Jar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodSelection: [{id: 0, quantity: 0, foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507350/SmoothieJar/Org_N_ejcdac.jpg"}]
    }
  };
//GIVE EVERY SELECTED FOOD AN ID !!!
  moreSore = () => {
    console.log(this.props.selectedFoods)
    this.interval = setInterval(() => this.setState({ quantity: this.state.quantity + 1}), 1);
  };
  stopSore = () => {
    clearInterval(this.interval);
  };

  // lessWess = () => {
  //   this.refs.jarfood.lessSess();
  // };

  // stopWess = () => {
  //   this.refs.jarfood.stopSess();
  // };

  render() {
    return this.props.selectedFoods.map((selectedFood) => (
    <JarFood ref="jarfood" selectedFoods={selectedFood}/>
    ));
  };
}

export default Jar;
