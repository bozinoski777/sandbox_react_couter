import React, { Component } from 'react';
import Choice from './Choice'


export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods:
     [{food1: "Erdnuesse"},
      {food2: "Walnuesse"},
      {food3: "Haselnuesse"},
      {food4: "Mandeln"}]
    }
  }
  render() {
    return this.state.foods.map((food) => (
      <Choice ChoiceTitle={Object.values(food)[0]} />
    ));
  };
}

export default Palette;
