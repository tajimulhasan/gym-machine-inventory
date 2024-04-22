import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Inventory = () => {
  const [item, setItem] = useState({});
  const [numbers, setNumber] = useState("");
  const {
    _id,
    name,
    picture,
    price,
    quantity,
    shortDescription,
    supplierName,
  } = item;
  console.log(item);
  const { id } = useParams();
  const inputRef = useRef(null);
  useEffect(() => {
    fetch(`https://gym-machine-inventory-management-server.onrender.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  };
  //delivered
  const handleDelivery = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      if(newQuantity){
        toast("Successfully delivered")
      }
      setItem((preQuantity) => ({ ...preQuantity, quantity: newQuantity }));
      const url = `https://gym-machine-inventory-management-server.onrender.com/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("successfully", data);
        });
    }
  };

  //Re-Stock
  const handleStockButton = () => {
    const newQuantity = quantity + parseInt(numbers);
    if(newQuantity){
      toast("Stock update successfully")
    }
    setItem((previousQuantity) => ({
      ...previousQuantity,
      quantity: newQuantity,
    }));
    const url = `https://gym-machine-inventory-management-server.onrender.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "successfully");
        inputRef.current.value = "";
      });
    if (numbers === "") {
      Swal.fire({
        title: "Empty number",
        text: "Type your number which you wanna stock",
        icon: "info",
      });
    }
  };

  return (
    <div className="inv">
      <div className="single-item mt-5">
        <div className="item-images">
          <img src={picture} alt="" />
        </div>
        <div className="devider">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle" id="orange-circle"></div>
        </div>
        <div className="item-details">
          <h3>{name}</h3>
          <p>
            Quantity: <span className="fw-bold">{quantity}</span>
          </p>
          <p>Price: ${price} (per)</p>
          <p>Supplier name: <span  className="supplier-Name">{supplierName}</span></p>
          <p>Description: {shortDescription}</p>
          <div className="deliverdAndReStock">
            <button onClick={handleDelivery} className="btn btn-success dele">
              Delivery
            </button>
            <div className="restock d-flex align-items-center">
              <button
                onClick={handleStockButton}
                className="btn btn-primary me-1"
              >
                Stock
              </button>
              <input
                ref={inputRef}
                onBlur={handleNumberInput}
                className="stock-number"
                placeholder="number.."
                type="number"
                name="number"
                id=""
              />
            </div>
          </div>
        </div>
      </div><br />
      <div className="manage-inv mt-3">
            <Link to="/manage-inventory"><button>Manage Inventories</button></Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Inventory;
