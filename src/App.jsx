import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
