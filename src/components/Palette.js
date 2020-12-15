import React, { Component } from 'react';
import Choice from './Choice'


export class Palette extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return this.props.foods.map((food) => (
      <Choice className="grid-item"
              ChoiceImg={food.foodImg}
              ChoiceTitle={food.foodName}
              moreMore={this.props.moreMore}
              stopMore={this.props.stopMore}
              // lessLess={this.props.lessLess}
              // stopLess={this.props.stopLess}
              addOne={this.props.addOne}/>
    ));
  };
}

export default Palette;
