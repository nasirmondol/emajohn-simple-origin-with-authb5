import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = product;
    const {name, img, ratings, price, seller} = product;
    // console.log(props);
     
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price: ${price}</p>
                <p className='product-name'><small>Manufacturer: {seller}</small></p>
                <p className='product-name'><small>Rating: {ratings} stars</small></p>
           </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-btn'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;