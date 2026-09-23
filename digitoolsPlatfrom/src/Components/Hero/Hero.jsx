import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Stat from './Stat';

const Hero = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Banner/>
            <Stat/>
        
        </div>
    );
};

export default Hero;