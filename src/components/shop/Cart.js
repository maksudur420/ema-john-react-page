import React from 'react';
import './cart.css';
const Cart = ({cart}) => {

    let price = 0;
    let shipping = 0;

    for(const product of cart){
        price += product.price;
        shipping += product.shipping;
    }

    const tax = parseFloat((price*0.01).toFixed(2));
    const totalPrice = (tax + price + shipping).toFixed(2);

    return (
        <div className='cart'>
            <h1>Order Summary : </h1>
            <p>Product Selected:{cart.length} </p>
            <p>Product Price: ${price} </p>
            <p>Shipping Cost: ${shipping} </p>
            <p>Tax on Price: ${tax} </p>
            <h5>Grand Total: ${totalPrice} </h5>
        </div>
    );
};

export default Cart;