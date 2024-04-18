import React from 'react';
import './MyItem.css';
const MyItem = ({myItem, handleMyItem}) => {
    const {_id,name, email, picture, supplierName, shortDescription} = myItem;
    return (
        <div>
            <div className='myItem-card'>
            <img src={picture} alt="" />
            <div className="mi-detail">
            <h2>{name}</h2>
            <p>Vendor name: <span className='fw-bold'>{supplierName}</span></p>
            <p>Email: {email}</p>
            <button onClick={() => handleMyItem(_id)} className='btn mI-dlt'>Delete</button>
            </div>
            </div>
        </div>
    );
};

export default MyItem;