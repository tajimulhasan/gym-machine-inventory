import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './InventoryItems.css';
const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
    }, [])
    return (
            <div className='items-sec'>
            <h2 className='text-center'>Our Inventory's items</h2>
            <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="items">
                {
                    items.slice(0, 6).map(i => <Item key={i._id} id={i._id} items={i}></Item>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default InventoryItems;