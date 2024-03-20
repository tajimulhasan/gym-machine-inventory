import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';
import Swal from 'sweetalert2';
const Inventory = () => {
    const [item, setItem] = useState({});
    const [numbers, setNumber] = useState('');
    const { _id, name, picture, price, quantity, shortDescription, supplierName} = item;
    const {id} = useParams();
    const inputRef = useRef(null);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => {
              setItem(data)
        })
    }, [id]);
    
   
    const handleNumberInput = e =>{
        setNumber(e.target.value)
        }
//delivered
const handleDelivery = () =>{
if(quantity > 0){
    const newQuantity = quantity - 1;
    setItem(preQuantity => ({...preQuantity, quantity: newQuantity}));
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({quantity: newQuantity})
    })
    .then(res => res.json())
    .then(data => {
        console.log('successfully', data);
    })
}          
}

//Re-Stock
    const handleStockButton = () =>{
        const newQuantity = quantity + parseInt(numbers);
        setItem(previousQuantity => ({...previousQuantity, quantity: newQuantity}))
         const url = `http://localhost:5000/inventory/${id}`;
         fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity }) 
         })
         .then(res => res.json())
         .then(data => {
            console.log(data, 'successfully');
           inputRef.current.value = '';

         });
         if(numbers === ''){
            Swal.fire({
                title: "Empty number",
                text: "Type your number which you wanna stock",
                icon: "info"
              });
         }
    }
      


    return (
     
         <div className='d-flex justify-content-center'>
            <div className='single-item mt-5'>
            <div className="item-images">
            <img src={picture} alt="" />
            </div>
            <div className='line'>

            </div>
            <div className="item-details">
                <h3>{name}</h3>
                <p>Quantity: <span className='fw-bold'>{quantity}</span></p>
                <p>Price: ${price} (per)</p>
                <p>Supplier name: {supplierName}</p>
                <p>Description: {shortDescription}</p>
                <div className="deliverdAndReStock">
                  <button onClick={handleDelivery} className='btn btn-success dele'>Delivery</button>  
                   <div className="restock d-flex align-items-center">
                   <button onClick={handleStockButton} className='btn btn-primary me-1'>Stock</button>
                   <input ref={inputRef}  onBlur={handleNumberInput} className='stock-number' placeholder='number..' type="number" name="number" id="" />
                   </div>
                </div>
            </div>
        </div>
         </div>
     
    );
};

export default Inventory;