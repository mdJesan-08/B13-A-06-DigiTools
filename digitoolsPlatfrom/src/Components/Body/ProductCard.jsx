import React, { useState } from 'react';
import { toast } from "react-toastify";
const ProductCard = ({product ,cartList, setCartList}) => {

    // const [isSelected, setIsSelected] = useState(false);
    let chipaisSelected = false;

    for(let i = 0; i < cartList.length ;i++)
    {
        if(cartList[i].id === product.id) chipaisSelected = true;
    }


    const handleButton = () =>
    {
        // setIsSelected(true);
        setCartList([...cartList, product]);
        toast.success('Item is Added to Cart.');
    }

    return (
        <div className='card w-96 bg-base-100 shadow-sm p-5 flex flex-col justify-center  gap-3.5'>
            <div className="card-headings flex justify-between">
                <div className='w-9 h-9'>{product.icon}</div>
                <span className="badge badge-xs badge-warning p-5 rounded-full">Most Popular</span>
            </div>

           <h2 className='text-2xl font-bold'> {product.name}</h2> 
           <p>{product.description}</p>
           <p className='font-semibold text-xl'> $ {product.price} / {product.billingPeriod}</p>
           <p>
            {/* {
                product.features.map((features) =>
                {
                    retrun (<p>features</p>)
                })
            } */}
           </p>
           <button className='btn btn-primary rounded-full' disabled={chipaisSelected}
            onClick={handleButton}>
                {chipaisSelected ? "Added to Cart" : "Buy Now"}
           </button>
        </div>
    );
};

export default ProductCard;