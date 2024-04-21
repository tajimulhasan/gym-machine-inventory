import React from "react";
import "./Manage.css";
import { Link, useParams } from "react-router-dom";
const Manage = ({ item, handleDelete }) => {
  const { id } = useParams();
  const {_id, name, supplierName, shortDescription, quantity, picture } = item;
   console.log(item);
  return (
    <div className="card-parent">
      <div className="card-img">
        <img src={picture} alt="" />
      </div>
      <div className="card-details">
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="icons">
      <Link to={`/inventory/${_id}`} title="Update"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#008000" viewBox="0 0 256 256"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg></Link>
      <div title="Delete">
      <svg onClick={() => handleDelete(item._id)} className="delete-but"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d11a2a" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
      </div>
      </div>
    </div>
  );
};

export default Manage;
