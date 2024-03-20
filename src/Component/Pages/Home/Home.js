import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import InventoryItems from "./InventoryItems/InventoryItems";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner><br /><br />
      <div className="invetory-items-sec mt-3">
            <InventoryItems></InventoryItems>
      </div>
    </div>
  );
};

export default Home;
