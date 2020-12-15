import React, { Component } from 'react';
import JarFood from './JarFood'


export class Jar extends Component {

  moreWore = () => {
    if (this.props.selectedFoods === []) {
      return "banana"
    } else {
      this.refs.jarfood.moreSore();
    }
  };

  stopWore = () => {
    if (this.props.selectedFoods === []) {
         return "banana"
    } else {
      this.refs.jarfood.stopSore();
    }
  };

  // lessWess = () => {
  //   this.refs.jarfood.lessSess();
  // };

  // stopWess = () => {
  //   this.refs.jarfood.stopSess();
  // };

  render() {
    if (this.props.selectedFoods === []) {
      return "Choose an ingredient!"
    } else {
    return this.props.selectedFoods.map((selectedFood) => (
    <JarFood ref="jarfood" selectedFoods={selectedFood}/>
    ));
  }};
}

export default Jar;
