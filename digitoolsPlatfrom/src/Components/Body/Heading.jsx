import React, { useState } from 'react';



const Heading = ({btnState, setBtnState,cartList}) => {

    console.log(btnState);
    return (
        <div className='flex flex-col justify-center items-center mt-15 font-bold gap-2.5 bg-'>
            <h2 className='text-5xl'>Premium Digital Tools</h2>
            <p className='text-gray-500'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            <div className="buttons  flex gap-3.5">

                <button  onClick={() => setBtnState("product")} className={`btn rounded-full ${ btnState === "product" ? "bg-accent" : "" 
                }`}>
                    Products
                </button> 

                <button  onClick={() => setBtnState("cart")} 
                className={`btn rounded-full ${ btnState === "cart" ? "bg-accent" : "" }`}>
                Cart({cartList.length})
                </button>
            </div>

            <div className='divider '></div>
        </div>
    );
};

export default Heading;