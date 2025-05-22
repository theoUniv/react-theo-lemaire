import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Ads from './pages/Ads';
import AdDetail from './pages/AdDetail';
import CreateAd from './pages/CreateAd';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ads />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/ads/:id" element={<AdDetail />} />
        <Route path="/create" element={<CreateAd />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
