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
            <h2>{name}</h2>
             <p style={{fontSize: '18px'}}>Supplier Name: <span className='fw-bold'>{supplierName}</span></p>
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