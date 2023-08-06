import cart from './cart.svg'
import wardrobe from './wardrobe.svg'
import { NavLink as Link, NavLink } from "react-router-dom";
import './App.css';
const NavBar = () => {
    return (
        <>
            <div className='nav'>
                <NavLink to='/' className='nav-links' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/About' className='nav-links' activeStyle>
                    About
                </NavLink>
                {/* <NavLink to="/Contact" className='nav-links' activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to="/blogs" className='nav-links' activeStyle>
                    Blogs
                </NavLink>
                <NavLink to="/sign-up" className='nav-links' activeStyle>
                    Sign Up
                </NavLink> */}
                <NavLink to='/' className='nav-links' align="right" activeStyle>
                    <img className='nav-cart' src={wardrobe} />
                </NavLink>
                <NavLink to='/' className='nav-links' align="right" activeStyle>
                    <img className='nav-cart' src={cart} />
                </NavLink>

            </div>
            <hr className='footer-hr' />
        </>
    );
};
export default NavBar;