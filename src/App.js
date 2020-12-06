import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Filling from './components/Filling'

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <Filling />
      </div>
    </div>
  );
}

export default App;
