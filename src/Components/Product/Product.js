import React from 'react';
import Button from '@material-ui/core/Button';
import './Product.css';
import { useHistory } from 'react-router';

const Product = ({product}) => {
    const history = useHistory()
    const handleClick = (id) =>{
        history.push(`/CheckOut/${id}`)
       
        console.log(id)
        
    }
    return (
        <div className="col-md-4 co-sm-12 p-3 product">
            <div className="card" style={{width: '25rem'}}>
                <img src={product.imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}-{product.weight}</h5>
                    <div className="d-inline-flex mt-5">
                        <div className="m-5">
                            <h4 className='text'>${product.addPrice}</h4>
                        </div>
                        <div className="m-5  ">
                            <Button className='btn' variant="contained" color="primary" onClick={ () => handleClick(product._id)}>
                                BuyNow
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;