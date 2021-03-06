
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
import { Box } from '@material-ui/core';




const CheckOut = () => {
    const{id} = useParams()
    const[product,setProduct] = useState({})
    console.log(product)
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)

    useEffect(() =>{
        fetch(`https://boiling-mesa-24658.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const productDetails ={
        name:product.name,
        price:product.addPrice,
        weight:product.weight,
        image:product.imageURL
    }
     
    const orderDetails={...loggedInUser, shipment:productDetails, orderTime: new Date()}

    const handleCheckOut = () =>{
         fetch('https://boiling-mesa-24658.herokuapp.com/addOrder',{
             method:'POST',
             headers :{
                 'Content-Type' : 'application/json',
             },
             body :JSON.stringify(orderDetails)
         })
         .then( res=> res.json())
         .then(data =>{
             if(data){
                 alert('CheckOut is SuccessFully done ');
               
             }
         })

    }
    return (
        <div className="col-md col-sm-6">
            <h1 style={{textAlign:'center'}} className='text-success'>CheckOut</h1>
            <table className="bg-table">
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{product.name}</td>
                    <td>{product.weight}</td>
                    <td>${product.addPrice}</td>
                </tr>            
            </table>
            <Box display="flex" flexDirection="row-reverse" m={2} p={2} mr={55} >
               <Button color='primary' variant="contained" onClick={handleCheckOut}>CheckOut</Button>
            </Box>
    
        </div>
    );
};

export default CheckOut;