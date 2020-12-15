import React, { Component } from 'react';
import './App.css';
import Palette from './components/Palette'
import Jar from './components/Jar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: [],
      foods: [{foodName: "Nelken", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507350/SmoothieJar/Org_N_ejcdac.jpg"},
              {foodName: "Chiasaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507349/SmoothieJar/Org_C_icsfcx.jpg"},
              {foodName: "Kürbisskerne", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507349/SmoothieJar/Org_P_x9rwrj.jpg"},
              {foodName: "Hanfsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607509947/SmoothieJar/Org_H_qf7kdl.jpg"},
              {foodName: "Flohsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507348/SmoothieJar/Org_Floh_ronshw.jpg"},
              {foodName: "Lainsaamen", foodImg: "https://res.cloudinary.com/dj9iphc8u/image/upload/v1607507363/SmoothieJar/Org_L_awwavh.jpg"}]
    }
  };

  addOne = (e) => {
    this.setState({
       selectedFoods: [...this.state.selectedFoods, e.target.currentSrc]
    });

  };
  moreMore = () => {
      this.refs.jar.moreWore();
  };

  stopMore = () => {
      this.refs.jar.stopWore();
  };

  // lessLess = () => {
  //   if (this.state.selectedFoods === []) {
  //   } else {
  //     this.refs.jar.lessWess();
  //   }
  // };

  // stopLess = () => {
  //   if (this.state.selectedFoods === []) {
  //   } else {
  //     this.refs.jar.stopWess();
  //   }
  // };

  render() {
    return (
      <div className="container App">
        <div className="row mt-4">
          <div className="grid-container">
            <Palette addOne={this.addOne.bind(this)}
                     moreMore={this.moreMore}
                     stopMore={this.stopMore}
                     // lessLess={this.lessLess}
                     // stopLess={this.stopLess}
                     foods={this.state.foods}/>
          </div>
          <div className="col-6">
            <Jar selectedFoods={this.state.selectedFoods} ref="jar"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
