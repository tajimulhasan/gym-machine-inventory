import React, { useEffect, useState } from "react";
import "./ManageInventory.css";
import Manage from "../../Manage/Manage";
import { Link } from "react-router-dom";
const ManageInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div>
      <div className="manage-card">
        {items.map((i) => (
          <Manage key={i._id} items={i}></Manage>
        ))}
      </div>
      <div className="manage-inv mt-3">
            <Link to="/addItem"><button>Add Item</button></Link>
      </div>
    </div>
  );
};

export default ManageInventory;
