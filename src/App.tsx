import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './component/user/Layout';
import Products from './pages/user/Products';
import Loginn from './pages/user/Loginn';
import Register from './pages/user/Register';
import Home from './pages/user/Home';
import Product_Detail from './pages/user/Product_Detail';
import Contact from './pages/user/Contact';
import LayoutAdmin from './component/admin/Layout';
import HomeAdmin from './pages/admin/Home';
import Products_admin from './pages/admin/Product/Products_admin';
import Category_admin from './pages/admin/Category/Category_admin';
import Cart from './pages/user/Cart';
import AddProduct_admin from './pages/admin/Product/AddProduct_admin';
import UpdateProduct_admin from './pages/admin/Product/UpdateProduct_admin';
import AddCategory from './pages/admin/Category/addCategory';
import UpdateCategory from './pages/admin/Category/updateCategory';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}/>
          <Route path='products' element={<Products></Products>}/>
          <Route path='product/:id' element={<Product_Detail />}/>
          <Route path="login" element={<Loginn></Loginn>}/>
          <Route path="register" element={<Register></Register>}/>
          <Route path='contact' element={<Contact></Contact>}/>
          <Route path='cart' element={<Cart></Cart>}/>
        </Route>
        <Route path="admin" element={<LayoutAdmin></LayoutAdmin>}>
          <Route index element={<HomeAdmin></HomeAdmin>}/>
          <Route path='products' element={<Products_admin></Products_admin>}/>
          <Route path='category' element={<Category_admin></Category_admin>}/>
          <Route path='product_add' element={<AddProduct_admin></AddProduct_admin>}/>
          <Route path='product_upd/:id' element={<UpdateProduct_admin></UpdateProduct_admin>}/>
          <Route path='category/add' element={<AddCategory></AddCategory>}/>
          <Route path='category/edit/:id' element={<UpdateCategory></UpdateCategory>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
