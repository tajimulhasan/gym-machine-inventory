import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Pages/Footer/Footer";
import Header from "./Component/Pages/Header/Header";
import Home from "./Component/Pages/Home/Home";
import NotFound from "./NotFound";
import Blogs from "./Component/Pages/Blogs/Blogs";
import SignUp from "./Component/Pages/Auth/SignUp/SignUp";
import Login from "./Component/Pages/Auth/Login/Login";
import Inventory from "./Component/Pages/Inventory/Inventory";
import ManageInventory from "./Component/Pages/ManageInventory/ManageInventory";
import AddItem from "./Component/Pages/AddItem/AddItem";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import MyItems from "./Component/Pages/MyItems/MyItems";
import About from "./Component/Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <br /><br />
      <Footer></Footer>
    </div>
  );
}

export default App;
