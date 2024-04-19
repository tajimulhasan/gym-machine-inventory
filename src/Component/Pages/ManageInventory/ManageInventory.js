import React, { useEffect, useState } from "react";
import "./ManageInventory.css";
import Manage from "../../Manage/Manage";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ManageInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  const handleDelete = itemId =>{
    const confirm = window.confirm('Are you sure you want to delete this item?');
   if(confirm){
    const url =`http://localhost:5000/inventory/${itemId}`;
    fetch(url, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const remaining = items.filter(i => i._id !== itemId);
      setItems(remaining);
    })
   }
   if(confirm){
    toast('Delete successfully')
   }
  }
  return (
    <div><br />
        <h1 className="text-center">Manage Items</h1>
      <div className="manage-card">
        {items.map((i) => (
          <Manage key={i._id} item={i} handleDelete={handleDelete}></Manage>
        ))}
      </div>
      <div className="manage-inv mt-4">
            <Link to="/addItem"><button>Add Item</button></Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageInventory;
