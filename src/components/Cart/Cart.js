import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const product = props.product
    return (
        <div>
            <p>{product.name}</p>
        </div>
    );
};

export default Cart;