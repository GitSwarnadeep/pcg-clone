import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import FindStore from './pages/FindStore/FindStore';
import ContactUs from './pages/Contact/ContactUs';
import Internation from './pages/Map/Internation';
import JoinUs from './pages/JoinUs/JoinUs';
import Product from './pages/Products/Product';
import ProductDetails from './pages/Products/ProductDetails';
import BlogList from './pages/Blogs/Blogs';
import BlogDetail from './pages/Blogs/BlogDetail';
import Tvc from './pages/TV_Commercial/Tvc';

export default function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0); 
    }, [location.pathname]);
    return children;
  };

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/store" element={<FindStore />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/international-network" element={<Internation />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/products" element={<Product />} /> 
          <Route path="/products/:id" element={<ProductDetails />} /> 
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/tvc" element={<Tvc />} />
          
        </Routes>
      </Wrapper>
    </Router>
  );
  
}
