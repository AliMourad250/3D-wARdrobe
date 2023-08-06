import React from "react";
import pic from './pn.png'
import abibas from './Abibas.png'
import mike from './Mike.png'
import abovearmour from './AboveArmour.png'
import buma from './Buma.png'
import insta from './insta-svgrepo-com.svg'
import facebook from './facebook-svgrepo-com.svg'
import twitter from './twitter-svgrepo-com.svg'
import './App.css';

const Home = () => {
    return (
        <>
            <div className='home-img'>
                <img src={pic} alt=''></img>

            </div>


            <h1 className='home-categories-h1' align="left"  >  Categories: </h1>


            <div className='home-categories'>

                <div className='home-categories-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-categories-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-categories-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-categories-box'>
                    <h1>uoefh</h1>
                </div>


            </div>



            <h1 className='home-brands-h1' align="left"  > Brands: </h1>



            <div className='home-brands'>

                <div className='home-brands-box'>
                    <img className='home-brands-abibas' src={mike} alt='' ></img>

                </div>

                <div className='home-brands-box'>

                    <img className='home-brands-abibas' src={abibas} alt='' ></img>
                </div>

                <div className='home-brands-box'>
                    <img className='home-brands-abibas' src={buma} alt='' ></img>
                </div>

                <div className='home-brands-box'>
                    <img className='home-brands-abibas' src={abovearmour} alt='' ></img>
                </div>

            </div>


            <h1 className='home-type-h1' align="left"  > Deals : </h1>

            <div className='home-topSellers'>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

            </div>


            <h1 className='home-topSellers-h1' align="left"  >  Top Sellers : </h1>

            <div className='home-topSellers'>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

                <div className='home-topSellers-box'>
                    <h1>uoefh</h1>
                </div>

            </div>




            <div className='footer'>

                <hr className='footer-hr' />

                <h1 className='footer-comments-h1'>  Comments </h1>

                <div className=' footer-comments'  >


                    <div className='footer-comments-box'>  <h3>  great </h3>  </div>
                    <div className='footer-comments-box'>   <h3>  great </h3> </div>
                    <div className='footer-comments-box'>   <h3>  great </h3> </div>
                    <div className='footer-comments-box'>   <h3>  great </h3> </div>


                </div>

                <h1>Follow our socials</h1>



                <div className='footer-links'>


                    <a className='nav-links' align="right" href="/"> <img className='footer-logo' src={insta}></img>    </a>
                    <a className='nav-links' align="right" href="/"> <img className='footer-logo' src={facebook}></img>    </a>
                    <a className='nav-links' align="right" href="/"> <img className='footer-logo' src={twitter}></img>    </a>




                </div>



                <h4>  copyright </h4>



            </div>
        </>
    );
};
export default Home;