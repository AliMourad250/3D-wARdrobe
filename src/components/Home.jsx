import Model from './mannequin';
import greyHoodie from '../imgs/grey hoodie.jpg';
import redShirt from '../imgs/red shirt.jpg';
import whiteShirt from '../imgs/white shirt.jpg';
import whiteShirt1 from '../imgs/white shirt(1).jpg';
import orangeTshirt from '../imgs/orange Tshirt.jpg';
import greyPants from '../imgs/grey pants.jpg';



const Home = () => {
    return (
        <div className="Home">
            {/* <div className="Home-Avatar"> */}
            <Model />
            {/* </div> */}

            <div className="Home-Cloths">
                <div className="row">
                    <div className="Home-Cloths-box-row">
                        <img src={greyHoodie} />
                        <p><b>Grey Hoodie</b><br />
                            18$
                        </p>
                    </div>
                    <div className="Home-Cloths-box-row">
                        <img src={redShirt} />
                        <p><b>Red Shirt</b><br />
                            12$
                        </p>
                    </div>
                    <div className="Home-Cloths-box-row">
                        <img src={whiteShirt} />
                        <p><b>White Shirt</b><br />
                            10$
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="Home-Cloths-box-row">
                        <img src={whiteShirt1} />
                        <p><b>White Shirt</b><br />
                            14$
                        </p>
                    </div>
                    <div className="Home-Cloths-box-row">
                        <img src={orangeTshirt} />
                        <p><b>Orange Shirt</b><br />
                            15$
                        </p>
                    </div>
                    <div className="Home-Cloths-box-row">
                        <img src={greyPants} />
                        <p><b>Grey Pants</b><br />
                            18$
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
