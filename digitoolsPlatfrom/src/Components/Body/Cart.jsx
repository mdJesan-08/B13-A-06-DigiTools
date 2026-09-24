import React from 'react';
import Empty from './CartComponents/Empty';
import CartProducts from './CartComponents/CartProducts';

const Cart = ({cartList, setCartList}) => {
    return (
        <div>
            {
                cartList.length === 0 ? <Empty/> : <CartProducts cartList={cartList} setCartList={setCartList}/>
            }
        </div>
    );
};

export default Cart;