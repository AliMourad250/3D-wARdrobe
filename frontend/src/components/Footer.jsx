
import twitter from '../imgs/twitter-svgrepo-com (1).svg';
import insta from '../imgs/insta-svgrepo-com.svg';
import facebook from '../imgs/facebook-svgrepo-com (1).svg';

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

