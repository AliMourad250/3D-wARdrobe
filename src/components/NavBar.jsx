import cart from '../imgs/cart.svg';
import wardrobe from '../imgs/wardrobe.svg';

const NavBar = () => {
    return (

        <div className="nav">

            <a className='nav-links' href="/">Home</a>
            <a className='nav-links' href="/">About</a>
            <a className='nav-links' href="/">logo</a>
            <a className='nav-links' href="/">Contact</a>
            <a className='nav-links' href="/">Q&A</a>
            <a className='nav-links' align="right" href="/"> <img className='nav-cart' src={wardrobe}></img>    </a>
            <a className='nav-links' align="right" href="/"> <img className='nav-cart' src={cart}></img>    </a>

        </div>

    )

}
export default NavBar;