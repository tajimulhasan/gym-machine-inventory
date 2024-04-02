import React from 'react';
import './AddItem.css';
import { Button, Form } from 'react-bootstrap';
const AddItem = () => {
    return (
        <div className='add-item-form'>
           <Form>
            <h1 className='text-center mb-4'>Add new item</h1>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Product name: </Form.Label>
        <Form.Control type="text" placeholder="Product name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Producer name: </Form.Label>
        <Form.Control type="text" placeholder="Producer name" />
      </Form.Group>
      <div className="price-and-quantity">
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Price: </Form.Label>
        <Form.Control className='pq' type="text" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Quantity: </Form.Label>
        <Form.Control className='pq' type="text" placeholder="Quantity" />
      </Form.Group>
      </div>
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image URL: </Form.Label>
        <Form.Control as="textarea" placeholder='paste here' rows={1} />
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description: </Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Button className='form-submit mt-3' type="submit">
        Add new Item
      </Button>
    </Form>
        </div>
    );
};

export default AddItem; 