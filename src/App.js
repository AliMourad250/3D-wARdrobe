
// import cart from './cart-large-minimalistic-svgrepo-com.svg'
// import wardrobe from './wardrobe-svgrepo-com.svg'
import NavBar from './NavBar'
import about from './About';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<about />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
