import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Footer from 'Footer';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;