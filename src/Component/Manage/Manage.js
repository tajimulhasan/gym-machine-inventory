import React from "react";
import "./Manage.css";
const Manage = ({ items }) => {
  const { name, supplierName, shortDescription, quantity, picture } = items;
  return (
    <div className="card-parent">
      <div className="card-img">
        <img src={picture} alt="" />
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="delete-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
      </div>
    </div>
  );
};

export default Manage;
