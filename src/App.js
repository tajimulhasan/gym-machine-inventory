import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import NotFound from './NotFound';
import Blogs from './Component/Pages/Blogs/Blogs';
import SignUp from './Component/Pages/Auth/SignUp/SignUp';
import Login from './Component/Pages/Auth/Login/Login';
import Inventory from './Component/Pages/Inventory/Inventory';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
