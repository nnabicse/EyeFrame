import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart  = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const handleChooseOne = (cart) =>{
        console.log(cart);

    }

    const handleReset = () =>{
        const newCart = [];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='products-container row row-cols-1 row-cols-md-3 g-4'>
                {
                    products.map(product=><Product

                        key = {product.id}
                        handleAddToCart = {handleAddToCart}
                        product = {product}
                    
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
                {
                    cart.map(product=><Cart product={product}></Cart>)
                }
                <div>
                <button onClick={()=>handleChooseOne (cart)} className='
                btn btn-lg bg-primary mb-3'>Choose One</button>
                </div>
                <div>
                <button onClick={handleReset} className='btn btn-lg bg-primary'>Reset</button>
                </div>
            </div>

        </div>
    );
};

export default Shop;