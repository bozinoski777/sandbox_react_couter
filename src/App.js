import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Palette from './components/Palette'
import Jar from './components/Jar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: []
    }
  };
  addOne = () => {
    this.setState({
       selectedFoods: [...this.state.selectedFoods, "bla"]
    });

  }
  render() {
    return (
      <div className="App">
        <div className="container mt-4 d-flex">
          <div>
            <Palette addOne={this.addOne}/>
          </div>
          <div>
            <Jar selectedFoods={this.state.selectedFoods}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
