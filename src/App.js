import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Palette from './components/Palette'

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
      </div>
    </div>
  );
}

export default App;
