import NavBar from './NavBar';
import AboutUs from './About';
import Home from './Home';
import SignUp from './Sign-Up';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Sign-Up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
