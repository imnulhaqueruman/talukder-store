import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const EditProduct = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('https://boiling-mesa-24658.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const deleteProduct =  (id) =>{
           console.log(id)
           fetch(`https://boiling-mesa-24658.herokuapp.com/delete/${id}`,{
               method:'DELETE'

           })
           .then(res =>res.json())
           .then(result =>{
               if(result){
               
               }
           })
    }



    return (
        <div>
            {
               products.length === 0 &&  <CircularProgress />
            }
            {
                products.map(product => <table class="table">
                                            
                                            <tbody>
                                            <tr>
                                                
                                                <td>{product.name}</td>
                                                <td> ${product.addPrice}</td>
                                                <td>{product.weight}</td>
                                                <td><button onClick={() =>deleteProduct(product._id)}>Delete</button></td>
                                            </tr>
                                            </tbody>
                                        </table>    
                    
                    
                    
                    
                    )
            }
        </div>
    );
};

export default EditProduct;