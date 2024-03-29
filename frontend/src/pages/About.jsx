import React from 'react';
import aliImage from '../imgs/team-member-1.jpg';
import tamerImage from '../imgs/team-member-2.jpg';
import mazenImage from '../imgs/team-member-3.jpg';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>Welcome to 3D-wARdrobe!</p>
            <p>We are a passionate team of tech enthusiasts who have come together to create a unique and immersive 3D wardrobe experience.</p>

            <h2>Our Mission</h2>
            <p>Our mission is to revolutionize the way people interact with and explore fashion. We believe that technology can bring clothing and style to life in new and exciting ways.</p>

            <h2>What We Offer</h2>
            <p>At 3D-wARdrobe, we offer a one-of-a-kind virtual wardrobe experience. You can browse, mix and match clothing items, and style our mannequin in real-time. Whether you're a fashionista looking for inspiration or just curious about how different outfits would look on you, we've got you covered.</p>

            <h2>Meet the Team</h2>
            <div>
                <div>
                    <img src={aliImage} alt="Team Member 1" />
                    <h3>Ali Mourad</h3>
                </div>

                <div>
                    <img src={tamerImage} alt="Team Member 2" />
                    <h3>Tamer Hamzeh</h3>
                </div>

                <div>
                    <img src={mazenImage} alt="Team Member 3" />
                    <h3>Mazen Azzam</h3>
                </div>
            </div>
        </div>
    );
}

export default About;