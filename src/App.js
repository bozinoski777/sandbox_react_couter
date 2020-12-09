import React, { Component } from 'react';
import './App.css';
import Palette from './components/Palette'
import Jar from './components/Jar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: ["1"]
    }
  };
  addOne = () => {
    this.setState({
       selectedFoods: [...this.state.selectedFoods, "bla"]
    });

  };

  moreMore = () => {
    this.refs.jar.moreWore();
  };

  stopMore = () => {
    this.refs.jar.stopWore();
  };

  lessLess = () => {
    this.refs.jar.lessWess();
  };

  stopLess = () => {
    this.refs.jar.stopWess();
  };

  render() {
    return (
      <div className="container App">
        <div className="row mt-4">
          <div className="grid-container">
            <Palette className="" addOne={this.addOne}
                     moreMore={this.moreMore} stopMore={this.stopMore}
                     lessLess={this.lessLess} stopLess={this.stopLess} />
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
