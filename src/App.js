import logo from './logo.svg';
import './App.css';
import Dashboard from './features/dashboard';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Devices from './features/devices';
import Login from './features/auth/login';
import Signup from './features/auth/signup';
import Rooms from './features/rooms';
import Statistics from './features/statistics';
import Users from './features/users';
import Homepage from './features/homepage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
