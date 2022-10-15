import './Cart.css';

const Cart = ({cart, children}) => {
    let total = 0;
    let shipping = 0
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    const parseGrand = parseFloat(grandTotal)
   
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand total: ${parseGrand.toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;