import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[imageURL,setImageURL] = useState(null)
    const[disabled,setDisabled] = useState(true)
    const onSubmit = data =>{
        const url=`https://boiling-mesa-24658.herokuapp.com/addProduct`;
        const productData ={
            name:data.name,
            weight:data.weight,
            addPrice:parseInt(data.addPrice),
            imageURL:imageURL,
        }
        console.log(productData)
        fetch(url,{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(productData)
        })
        .then(res => res.json())
    };
    const handleSubmitPhoto = (event) =>{
          console.log(event.target.files[0]);
          const imageData = new FormData();
          imageData.set('key','d25a6a797e6a557a70fd872c01a23047')
          imageData.append('image',event.target.files[0])
          axios.post('https://api.imgbb.com/1/upload', 
              imageData
          )
          .then(function (response) {
              console.log(response.data.data.display_url)
            setImageURL(response.data.data.display_url);
            if(response.data.data.display_url){
                setDisabled(false)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className='data'>
           
            <form style={{padding:10}} onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="test" ref={register} />
            <input name="weight" type="text" defaultValue='4'ref={register} />
            <br/>
            <input name="addPrice" type='text' defaultValue="4" ref={register}/>
            <input name="addPhoto" type="file"  onChange={handleSubmitPhoto}/>
            {errors.exampleRequired && <span>This field is required</span>}
            <br/>
            <input  type="submit" disabled={disabled} />
            </form>
        </div>
    );
};

export default AddProduct;