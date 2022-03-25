import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data => setProducts(data))

    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=>console.log(product))
                }

            </div>

            
        </div>
    );
};

export default Shop;