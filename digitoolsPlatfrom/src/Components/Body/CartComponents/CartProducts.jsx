import React from 'react';
import CartCard from './CartCard';

const CartProducts = ({cartList, setCartList}) => {
    let total = 0;

    for (let i = 0; i < cartList.length; i++) {
        total = total + cartList[i].price;
    }

    const handleButton = () =>
    {
        setCartList([]);
    }

    return (
        <div className='flex flex-col gap-7'>
            <h2 className='text-3xl font-bold'>Your Cart</h2>
            {
                cartList.map((product) =>{
                    return (<CartCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>);
                })
            }
            <h2 className='font-bold text-2xl'>Total : ${total}</h2>
            <button className='btn btn-lg btn-primary rounded-full' onClick={handleButton}>Proceed to CheckOut</button>
        </div>
    );
};

export default CartProducts;