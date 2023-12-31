import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Singup from './pages/Singup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="product" element={<OurStore />}></Route>
            <Route path="product/:id" element={<SingleProduct />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/:id" element={<SingleBlog />}></Route>
            <Route path="compare-product" element={<CompareProduct />}></Route>
            <Route path="wishlist" element={<Wishlist />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="forgot-password" element={<ForgotPassword />}></Route>
            <Route path="singup" element={<Singup />}></Route>
            <Route path="reset-password" element={<ResetPassword />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
