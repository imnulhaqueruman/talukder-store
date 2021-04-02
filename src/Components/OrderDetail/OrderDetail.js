import React from 'react';
import Card from 'react-bootstrap/Card'
const OrderDetail = ({item}) => {
    const{name,price,weight,image} = item.shipment;
    return (
        <div className="col-md-4 p-3 bg-secondary ">
           <div class="card" style={{width: '18rem'}}>
                <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-info">{name}</h5>
                  
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-info">Price:${price}</li>
                    <li class="list-group-item text-info">Weight:{weight}</li>
                    <li class="list-group-item text-info">Last Update {new Date(item.orderTime).toDateString('dd/MM/yyyy')}</li>
                </ul>
                
            </div>
        </div>
    );
};

export default OrderDetail;