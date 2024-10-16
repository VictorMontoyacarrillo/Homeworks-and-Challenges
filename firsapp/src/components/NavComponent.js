// src/components/NavComponent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavComponent.css'; // Importa los estilos para NavComponent

const NavComponent = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/perfil' ? 'active' : ''}>
          <Link to="/perfil">Perfil</Link>
        </li>
        <li className={location.pathname === '/panel' ? 'active' : ''}>
          <Link to="/panel">Panel de Control</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
