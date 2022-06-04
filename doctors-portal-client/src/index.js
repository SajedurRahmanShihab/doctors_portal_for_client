import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateOutlet from './Pages/PrivateOutlet/PrivateOutlet';
import Dashboard from './Pages/Dashboard/Dashboard/Dasboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="appointment" element={<PrivateOutlet><Appointment /></PrivateOutlet>} />
        <Route path="dashboard" element={<PrivateOutlet><Dashboard /></PrivateOutlet>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  </AuthProvider>
);


