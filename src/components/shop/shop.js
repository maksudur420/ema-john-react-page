import React, { useEffect, useState } from 'react';
import Product from './Product';
import './shop.css'

const Shop = () => {


    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    return (
        <div className='shop'>
            <div className="product-section">
                {
                    products.map(product=><Product
                         key={product.id} 
                         product={product}
                         >
                         </Product>)
                }
            </div>
            <div className="Order-summary">
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;