import React from 'react';

const CartCard = ({product,cartList, setCartList}) => {

    const handleButton = () =>
    {
        console.log(" remove button pressesd");
        console.log(cartList);
        const newCartList = cartList.filter((item) => item.id !== product.id);
        setCartList(newCartList);
    }
    return (
        <div className='flex justify-between shadow-2xl p-9 rounded-3xl'>
            <div className="description flex gap-3">
                <p >{product.icon}</p>
                <div className="price flex flex-col text-2xl font-bold">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>

            </div>
            <button onClick={handleButton} className='btn btn-active btn-error rounded-full'>
                Remove
            </button>
        </div>
    );
};

export default CartCard;