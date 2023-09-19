import cart from '../imgs/cart.svg';
import wardrobe from '../imgs/wardrobe.svg';
import logo from '../imgs/logo.png';
import Auth from '../Auth';
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        if (path === "/home" && !Auth.isAuthenticated()) {
            navigate("/login");
            return;
        }
        if ((path === "/signup" || path === "/login") && Auth.isAuthenticated()) {
            navigate("/home");
            return;
        }
        if (path === "/about") {
            navigate("/about");
            return;
        }

        if (path !== location.pathname) {
            navigate(path);
        }
    }

    const handleLogout = () => {
        Auth.deAuthenticate();
        navigate("/login");
    }

    return (
        <>

            <div className="nav">
                <button className='nav-logo' onClick={() => handleNavigation("/home")} > <img className='logo' src={logo} /></button>
                <div className="nav-right">
                    <button className='nav-links' onClick={() => handleNavigation("/home")}>Home</button>
                    <button className='nav-links' onClick={() => handleNavigation("/about")}>About</button>
                    <button className='nav-links' onClick={() => handleNavigation("/signup")} style={{ display: Auth.isAuthenticated() ? "none" : "block" }}>Sign up</button>
                    <button className='nav-links' onClick={() => handleNavigation("/login")} style={{ display: Auth.isAuthenticated() ? "none" : "block" }}>Login</button>
                    <button className='nav-links' > <img className='nav-cart' src={wardrobe} />    </button>
                    <button className='nav-links' > <img className='nav-cart' src={cart} />    </button>
                    <button className='nav-links logout' onClick={handleLogout} style={{ display: Auth.isAuthenticated() ? "block" : "none" }}>Logout</button>
                </div>
            </div>
        </>


    )

}
export default NavBar;