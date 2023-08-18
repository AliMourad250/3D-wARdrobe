
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



/*
 .footer {
display: flex;
justify - content: center;
justify - content: space - between;
margin - left: 20 %;
margin - right: 20 %;
margin - top: 2 %;
}

.footer - links {
    color: #2A2D34;
    text - decoration: none;
    font - weight: 500;
    font - size: larger;
}

.footer - links: hover,
.footer {
    transform: translate(1px, -2px) rotate(-1deg);
}
*/