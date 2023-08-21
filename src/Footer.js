
import twitter from './twitter-svgrepo-com.svg';
import insta from './insta-svgrepo-com.svg';
import facebook from './facebook-svgrepo-com.svg';

const Footer = () => {
    return (

        <div className='footer'>

            <a className='footer-links' align="right" href="/"> <img className='nav-cart' src={twitter}></img>    </a>
            <a className='footer-links' align="right" href="/"> <img className='nav-cart' src={facebook}></img>    </a>
            <a className='footer-links' align="right" href="/"> <img className='nav-cart' src={insta}></img>    </a>



        </div>

    )

}



export default Footer;

