import React from 'react';
import Avatar from '../assets/avatar-image.png';
import AboutMenu from './AboutMenu.js';


const About = () => {
    return (
        <>
            <div className="avatar-container">
                <img src="/assets/avatar-image.png" alt="Avatar" />
            </div>
            <div className="about-content">
                <AboutMenu />
            </div>
        </>
    );
};

export default About;