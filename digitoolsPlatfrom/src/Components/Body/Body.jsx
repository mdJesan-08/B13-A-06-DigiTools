import  React  from 'react';
import {use , useState}from 'react'
import Product from './Product';
import Steps from './Steps';
import Heading from './Heading';
import Cart from './Cart';

const Body = ({productInfo,  cartList, setCartList}) => {
    const [btnState, setBtnState] = useState("product");


    const productsInfo = use(productInfo);
    // console.log(productsInfo[0]);
    return (
        <div>
            <Heading btnState={btnState} setBtnState={setBtnState} cartList={cartList}/>
            {
                btnState === "product" ?  
                <Product productsInfo={productsInfo} cartList={cartList} setCartList={setCartList}  /> :
                <Cart cartList={cartList} setCartList={setCartList} />
            }
           
            <Steps/>
        </div>
    );
};

export default Body;