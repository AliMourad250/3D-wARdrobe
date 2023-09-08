import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from 'pages/Sign-Up';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, useNavigate,
} from 'react-router-dom'

const toggleFooter=({children})=>{

}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
