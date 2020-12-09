import React, { Component } from 'react';
import JarFood from './JarFood'


export class Jar extends Component {

  moreWore = () => {
    this.refs.jarfood.moreSore();
  };

  stopWore = () => {
    this.refs.jarfood.stopSore();
  };

  lessWess = () => {
    this.refs.jarfood.lessSess();
  };

  stopWess = () => {
    this.refs.jarfood.stopSess();
  };

  render() {
    return this.props.selectedFoods.map((selectedFood) => (
    <JarFood ref="jarfood" selectedFoods={selectedFood}/>
    ));
  };
}

export default Jar;
