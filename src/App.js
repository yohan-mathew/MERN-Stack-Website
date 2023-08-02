import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Reservation from './pages/reservations/Reservation';
import Mwservices from './pages/Offeredservices/Mwservices';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Love To Cut</title>
                <link rel="canonical" href="http://lovetocut.com" />
                <meta name="description" content="Haircut in baytown" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserveNow" element={<Reservation />} />
        <Route path="/Mservices" element={<Mwservices />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Toaster className='flex  items-start justify-start' />
    </div>
  );
}

export default App;
