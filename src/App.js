import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './componenets/calculator';
import Navbar from './componenets/Navbar';
import Home from './pages/Homes';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);

export default App;
