
import './App.css';
import HomePage from './pages/home/HomePage';
import {Routes, Route} from "react-router-dom"
import Reservation from './pages/reservations/Reservation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route index path="/reserveNow" element={<Reservation/>} />
      </Routes>
      
    </div>
  );
}

export default App;
