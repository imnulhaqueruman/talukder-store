import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Home = () => {
    const[products,setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='row m-5 '>
            {
               products.map(product => <Product product={product}></Product>) 
            }
        </div>
    );
};

export default Home;