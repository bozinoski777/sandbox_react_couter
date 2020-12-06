import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Palette from './components/Palette'
import Jar from './components/Jar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: [1,2,3]
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container mt-4 d-flex">

          <Jar selectedFoods={this.state.selectedFoods}/>
        </div>
      </div>
    );
  }
}

export default App;
