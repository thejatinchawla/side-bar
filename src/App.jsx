import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Gallery from './Pages/Gallery';
import OwnedLands from './Pages/OwnedLands';
import Payment from './Pages/Payment';
import Help from './Pages/Help';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lands" element={<OwnedLands/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
        </Sidebar>
    </BrowserRouter>
    </div>
  )
}
          

export default App