import React from 'react';
import image from '../assets/Header.png';

const Header = () => {
    return(
        <header>
            <div className="wrapper headerContainer">
                <div className="titleContainer">
                    <h1>Quick Flicker Pick</h1>
                    <h2>A curator for blockbusters and movies</h2>
                </div>

                <div className="imageContainer">
                    <img src={image} alt="Retro camera"/>
                </div>
            </div>
            
        </header>
    )
}

export default Header;