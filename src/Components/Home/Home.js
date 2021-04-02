import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Product from '../Product/Product';

const Home = () => {
    const[products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://boiling-mesa-24658.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='row m-5 '>
            {
                products.length === 0 &&  <CircularProgress />
            }
            {
               products.map(product => <Product product={product}></Product>) 
            }
           
        </div>
    );
};

export default Home;