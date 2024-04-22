import React, { useRef } from 'react';
import './AddItem.css';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
  const handleRefName =  useRef('');
  const handleRefName2 =  useRef('');
  const handleRefPrice =  useRef('');
  const handleRefQuantity =  useRef('');
  const handleRefImg =  useRef('');
  const handleRefDes =  useRef('');  
  const [user] = useAuthState(auth);
        const email = user.email;
  const handleFormSub = e =>{
    e.preventDefault();
     const name = handleRefName.current.value;
     const supplierName = handleRefName2.current.value;
     const picture = handleRefImg.current.value;
     const shortDescription = handleRefDes.current.value;
     const price = Number(handleRefPrice.current.value);
    const quantity = Number(handleRefQuantity.current.value);
    const data = {name, email, picture, shortDescription, price, quantity, supplierName};
    const url = 'https://gym-machine-inventory-management-server.onrender.com/inventory';
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      e.target.reset();
      toast('Added successfully')
    })
  }
    return (
        <div className='add-item-form'>
           <Form onSubmit={handleFormSub}>
            <h1 className='text-center mb-4'>Add new item</h1>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Product name: </Form.Label>
        <Form.Control ref={handleRefName} type="text" placeholder="Product name" required/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Producer name: </Form.Label>
        <Form.Control ref={handleRefName2} type="text" placeholder="Producer name" required/>
      </Form.Group>
      <div className="price-and-quantity">
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Price: </Form.Label>
        <Form.Control ref={handleRefPrice} className='pq' type="number" placeholder="Price" required/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Quantity: </Form.Label>
        <Form.Control ref={handleRefQuantity} className='pq' type="number" placeholder="Quantity" required/>
      </Form.Group>
      </div>
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image URL: </Form.Label>
        <p className='tips'>*Note: Your image size should be 600x600 pixels.</p>
        <Form.Control ref={handleRefImg} as="textarea" placeholder='paste here' rows={1} required/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description: </Form.Label>
        <Form.Control placeholder='Describe about your product...' ref={handleRefDes} as="textarea" rows={2} required/>
      </Form.Group>
      <Button className='form-submit mt-3' type="submit">
        Add new Item
      </Button>
    </Form>
    <ToastContainer />
        </div>
    );
};

export default AddItem; 