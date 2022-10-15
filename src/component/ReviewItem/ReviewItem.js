import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleDeleteButton} = props;
    const { name, img, quantity, seller, price, shipping } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-detail-container'>
                <div className='review-item-detail'>
                    <p title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleDeleteButton(product)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;