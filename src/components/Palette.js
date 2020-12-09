import React, { Component } from 'react';
import Choice from './Choice'


export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [{foodName: "Nelken", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507350/SmoothieJar/Org_N_ejcdac.jpg"},
              {foodName: "Chiasaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507349/SmoothieJar/Org_C_icsfcx.jpg"},
              {foodName: "Kürbisskerne", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507349/SmoothieJar/Org_P_x9rwrj.jpg"},
              {foodName: "Hanfsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507348/SmoothieJar/Org_H_qf7kdl.jpg"},
              {foodName: "Flohsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507348/SmoothieJar/Org_Floh_ronshw.jpg"},
              {foodName: "Lainsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507363/SmoothieJar/Org_L_awwavh.jpg"}]
    }
  }


  render() {
    return this.state.foods.map((food) => (
      <Choice ChoiceImg={Object.values(food)[1]} ChoiceTitle={Object.values(food)[0]} moreMore={this.props.moreMore} stopMore={this.props.stopMore} lessLess={this.props.lessLess} stopLess={this.props.stopLess} addOne={this.props.addOne}/>
    ));
  };
}

export default Palette;
