import cart from './cart.svg'
import wardrobe from './wardrobe.svg'
import { NavLink as Link, NavLink } from "react-router-dom";
import './App.css';
const NavBar = () => {
    return (
        <>
            <div className='nav'>
                <NavLink to='/' className='nav-links'>
                    Home
                </NavLink>
                <NavLink to='/About' className='nav-links'>
                    About
                </NavLink>
                <NavLink to='/Sign-Up' className='nav-links'>
                    Sign Up
                </NavLink>
                <NavLink to="/Contact" className='nav-links' >
                    Contact Us
                </NavLink>
                <NavLink to='/' className='nav-links' align="right" >
                    <img className='nav-cart' src={wardrobe} />
                </NavLink>
                <NavLink to='/' className='nav-links' align="right" >
                    <img className='nav-cart' src={cart} />
                </NavLink>

            </div>
            <hr className='footer-hr' />
        </>
    );
};
export default NavBar;