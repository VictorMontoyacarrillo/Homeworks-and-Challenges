// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulamos que el usuario está autenticado

  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
        <Route path="/panel" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
