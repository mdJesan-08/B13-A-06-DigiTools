import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Stat from './Stat';

const Hero = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Stat/>
            Hello from hero
        </div>
    );
};

export default Hero;