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
        const randomNumber = Math.floor(Math.random() * cart.length);
        const randomProduct = cart[randomNumber];
        const newCart = [];
        newCart.push(randomProduct)
        setCart(newCart)
        

    }

    const handleReset = () =>{
        const newCart = [];
        setCart(newCart)
    }

    return (
        <div className='container my-3 overflow-hidden'>
            <div className='row justify-content-md-center mx-0'>
            <div className='col col-sm-12 col-md-3 col-lg-3  a'>
                <div className='cart-container'>
                <h4 className='fw-bolder text-center p-2 mt-1'>Order Summary</h4>
                <div className='my-5'>
                {
                    cart.map(product=><Cart product={product}></Cart>)
                }
                </div>
                <div className='row p-2 m-auto'>
                <button onClick={()=>handleChooseOne (cart)} className='
                btn btn-sm w-75 m-auto mb-3 cart-button fw-bold'><p>Choose One</p></button>
                <button onClick={handleReset} className='btn btn-sm w-75 m-auto cart-button mb-3 fw-bold'><p>Reset Cart</p></button>
                </div>
                </div>
            </div>
            <div className='row col col-sm-12 col-md-9 col-lg-9 mx-0 product-container a'>
                {
                    products.map(product=><Product
                        key = {product.id}
                        handleAddToCart = {handleAddToCart}
                        product = {product}                  
                    ></Product>)
                }
            </div>
        </div>
    </div>

    );
};

export default Shop;