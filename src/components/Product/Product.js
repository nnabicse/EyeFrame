import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {img, name, price} = product
    return (
        <div className='product'>
        <div className="col">
            <div class="card h-100">
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
        <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{price}</p>
            </div>
            <div className="card-footer">
                <button onClick={()=>handleAddToCart(product)} className=' btn button-cart w-100'>
                    <p className='button-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Product;