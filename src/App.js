
import './App.css';
import HomePage from './pages/home/HomePage';
import {Routes, Route} from "react-router-dom"
import Reservation from './pages/reservations/Reservation';
import Mwservices from './pages/Offeredservices/Mwservices';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/reserveNow" element={<Reservation/>} />
        <Route path="/Mservices" element={<Mwservices/>} />
      </Routes>
      
    </div>
  );
}

export default App;
