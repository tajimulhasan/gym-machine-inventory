import React from 'react';
import './Item.css';
import { useNavigate} from 'react-router-dom';
const Item = ({items}) => {
    const { _id, name, picture, price, quantity, shortDescription, supplierName} = items;
      const navigate = useNavigate();
      const handleClick = id =>{
      navigate(`/inventory/${id}`)
      }
   return (
        <div className='item'>
            <div className="item-img">
            <img src={picture} alt="" />
            </div>
            <div className="details">
            <h3 className='mt-2'>{name}</h3>
               <p className='sort-des'>{shortDescription.slice(0, 75)}...</p>
             <p className='sp'>Vendor: <span className='fw-bold' style={{color: 'black'}}>{supplierName}</span></p>
             <p>Price: ${price}</p>
             <p>Quantity: {quantity}</p>
            </div>
           <div className="up-btn">
            <button onClick={() => handleClick(_id)} className='btn update-btn'>Stock Update</button>
            </div>
        </div>
    );
};

export default Item;