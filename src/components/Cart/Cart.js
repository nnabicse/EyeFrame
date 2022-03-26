import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const product = props.product
    return (
        <div className='text-center fw-bold cart-item'>
            <p>{product.name}</p>
        </div>
    );
};

export default Cart;