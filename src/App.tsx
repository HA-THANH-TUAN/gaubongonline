import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Private from './Pages/Private';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Product from './Pages/Product/Product';
import Dashboard from './Pages/Dashboard';
import Account from './Pages/Account/Account';
import ProductList from './Pages/Product/ProductList/ProductList';
import Catalogories from './Pages/Product/Catalogories/Catalogories';
import Transaction from './Pages/Transaction/Transaction';
import AddProduct from './Pages/Product/AddProduct/AddProduct';
import Orders from './Pages/Orders/Orders';
import Customer from './Pages/Users/Customer/Customer';
import Reporting from './Pages/Users/Reporting/Reporting';
import BlackUser from './Pages/Users/BlackUsers/BlackUser';
import Users from './Pages/Users/User';
import Statistics from './Pages/Statistics/Statistics';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Private/>}>
          <Route path='/' element={<Dashboard/>}></Route>

          <Route path='/product' element={<Product/>}></Route>
          <Route path='/product/add-product' element={<AddProduct/>}></Route>
          <Route path='/product/product-list' element={<ProductList/>}></Route>
          <Route path='/product/product-catalogories' element={<Catalogories/>}></Route>

          <Route path='/shop' element={<Shop/>}></Route>

          <Route path='/transaction' element={<Transaction/>}></Route>

          <Route path='/orders' element={<Orders/>}></Route>

          <Route path='/users' element={<Users/>}></Route>
          <Route path='/users/customer' element={<Customer/>}></Route>
          <Route path='/users/black-user' element={<BlackUser/>}></Route>
          <Route path='/users/Reporting' element={<Reporting/>}></Route>

          <Route path='/statistics' element={<Statistics/>}></Route>
          <Route path='/account' element={<Account/>}></Route>

        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
   

    </BrowserRouter>
  );
}

export default App;

