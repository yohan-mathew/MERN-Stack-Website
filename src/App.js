import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Reservation from './pages/reservations/Reservation';
import Mwservices from './pages/Offeredservices/Mwservices';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserveNow" element={<Reservation />} />
        <Route path="/Mservices" element={<Mwservices />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
