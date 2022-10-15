import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate()

    const handleDeleteButton = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-orders-container">
                {
                    cart.map(product =>
                        <ReviewItem
                            key={product.id}
                            product={product}
                            handleDeleteButton={handleDeleteButton}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='cart-button' onClick={() => navigate('/inventory')}>Proceed checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;