import cart from '../imgs/cart.svg';
import wardrobe from '../imgs/wardrobe.svg';
import logo from '../imgs/logo.png';
import Footer from './Footer';
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        if (path === "/home") {
            navigate("/home");
            return
        }
        if (path === "/signup") {
            navigate("/signup");
            return
        }
        if (path === "/about") {
            navigate("/about");
            return
        }
        if (path === "/contact") {
            navigate("/contact");
            return
        }

        if (path !== location.pathname) {
            navigate(path);
        }
    }

    return (

        <div className="nav">

            <button className='nav-links' onClick={() => handleNavigation("/home")}>Home</button>
            <button className='nav-links' >About</button>
            <button className='nav-links' >logo</button>
            <button className='nav-links' >Contact</button>
            <button className='nav-links' onClick={() => handleNavigation("/signup")}>Sign up</button>
            <button className='nav-links' > <img className='nav-cart' src={wardrobe} />    </button>
            <button className='nav-links' > <img className='nav-cart' src={cart} />    </button>

        </div>

    )

}
export default NavBar;