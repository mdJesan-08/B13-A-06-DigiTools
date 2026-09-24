import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Stat from './Stat';

const Hero = ({cartList}) => {
    return (
        <div className='container mx-auto'>
            <Navbar  cartList={cartList} />
            <Banner/>
            <Stat/>
        
        </div>
    );
};

export default Hero;