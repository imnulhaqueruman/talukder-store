import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';

const Order = () => {
    const[orderItem,setOrderItem] = useState([])
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)

    useEffect(() =>{
        fetch('https://boiling-mesa-24658.herokuapp.com/orderHistory?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderItem(data))
    },[])
    return (
        <div className="row m-5">
         
           {
              orderItem.map(item => <OrderDetail item={item}></OrderDetail>)
           }
        </div>
    );
};

export default Order;