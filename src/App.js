import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './componenets/calculator';
import Navbar from './componenets/Navbar';
import Home from './pages/Homes';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>

  </>
);

export default App;
