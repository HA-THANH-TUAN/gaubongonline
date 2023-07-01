import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Layout } from 'antd';
import SiderBar from './Layouts/SiderBar/SiderBar';
import Header from './Layouts/Header/Header';
import Content from './Layouts/Content/Content';
import Private from './Pages/Private';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Product from './Pages/Product';
import AddProduct from './Layouts/AddProduct/AddProduct';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Private/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/san-pham' element={<Product/>}>
            <Route path='them-san-pham' element={<AddProduct/>}></Route>
          </Route>
          <Route path='/shop' element={<Shop/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
   

    </BrowserRouter>
  );
}

export default App;

