import React from 'react';
import ProductCard from './ProductCard';
// import { useState } from 'react';
const Product = ({ productsInfo ,cartList, setCartList }) => {
    // console.log('productInfo:', productsInfo);

    return (
        <div className='grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {productsInfo.map((product, ind) => {
                return (
                    <ProductCard key={ind} product={product} cartList={cartList} setCartList={setCartList}   />
                );
            })}
        </div>
    );
};

export default Product;