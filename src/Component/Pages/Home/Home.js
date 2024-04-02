import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import InventoryItems from "./InventoryItems/InventoryItems";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner><br /><br />
      <div className="invetory-items-sec mt-3">
            <InventoryItems></InventoryItems>
      </div><br /><br />
      <div className="manage-inv text-center">
            <Link to="/manage-inventory"><button>Manage Inventories</button></Link>
      </div>
    </div>
  );
};

export default Home;
