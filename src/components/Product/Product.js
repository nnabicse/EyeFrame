import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {img, name, price} = product
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 my-2 product-card'>
        <div className="col gx-2 product">
            <div class="h-100">
            <img src={img} className="card-img-top mt-3" alt="..."></img>
            <div className="card-body">
        <h5 className='card-title fw-bolder'>{name}</h5>
                <p className='card-text fw-bold'>${price}</p>
            </div>
            <div className="card-footer">
                <button onClick={()=>handleAddToCart(product)} className=' btn button-cart justify-content-center w-100 cart-button fw-bold'>
                    <p className='button-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Product;