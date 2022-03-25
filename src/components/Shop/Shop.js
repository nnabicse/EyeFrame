import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data => setProducts(data))

    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container row row-cols-1 row-cols-md-3 g-4'>
                {
                    products.map(product=><Product

                        key = {product.id}
                        product = {product}
                    
                    ></Product>)
                }

            </div>
            <div className='çart-container'>
                <h1>Cart</h1>
            </div> 
        </div>
    );
};

export default Shop;