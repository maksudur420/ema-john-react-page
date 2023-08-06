import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Product from './Product';
import Cart from './Cart';
import './shop.css'

const Shop = () => {


    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleClick =(product)=>{
        setCart([...cart,product]);
        addToDb(product.id);
    };

    return (
        <div className='shop'>
            <div className="product-section">
                {
                    products.map(product=><Product
                         key={product.id} 
                         product={product}
                         handleAddtocart={handleClick}
                         >
                         </Product>)
                }
            </div>
            <div className="Order-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;