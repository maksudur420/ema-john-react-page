import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({product,handleAddtocart}) => {
    const {name,ratings,category,price,img,stock} =product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className="Product-info">
                <h4>Product Name: {name}</h4>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Stock: {stock}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleAddtocart(product)} className='btn-primary'>
                <p className='btn-text'>Add to Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;