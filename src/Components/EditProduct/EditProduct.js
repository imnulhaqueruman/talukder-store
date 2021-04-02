
import React, { useEffect, useState } from 'react';

const EditProduct = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const deleteProduct =  (id) =>{
           console.log(id)
           fetch(`http://localhost:5000/delete/${id}`,{
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