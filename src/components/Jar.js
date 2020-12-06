import React, { Component } from 'react';
import JarFood from './JarFood'


export class Jar extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 10
    }
  }

  allThings = () => {

  }

  render() {
    return this.props.selectedFoods.map((selectedFood) => (
    <JarFood  />
    ));
  };
}

export default Jar;
