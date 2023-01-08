import logo from './logo.svg';
import './App.css';
import Homepage from './features/homepage';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Devices from './features/devices';
import Login from './features/auth/login';
import Signup from './features/auth/signup';
import Rooms from './features/rooms';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
