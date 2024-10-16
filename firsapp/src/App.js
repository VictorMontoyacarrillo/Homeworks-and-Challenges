// src/App.js
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Auth from './components/Auth';
import AuthProvider, { AuthContext } from './AuthContext';

const App = () => {
  // Define el estado y la función para actualizar el estado
  const [user, setUser] = useState(null); // Aquí defines setUser

  return (
    <AuthProvider>
      <Router>
        <NavComponent />
        <Routes>
          <Route path="/" element={<><Home /><Auth setUser={setUser} /></>} />
          <Route path="/perfil" element={user ? <Profile /> : <Navigate to="/" />} />
          <Route path="/panel" element={user ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



