
import './App.css';
import HomePage from './pages/home/HomePage';
import {Routes, Route} from "react-router-dom"
import Reservation from './pages/reservations/Reservation';
import Mwservices from './pages/Offeredservices/Mwservices';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/reserveNow" element={<Reservation/>} />
        <Route path="/Mservices" element={<Mwservices/>} />
        <Route path = "/login" element={<LoginPage />}/>
      </Routes>
      <Toaster />
      
    </div>
  );
}

export default App;
