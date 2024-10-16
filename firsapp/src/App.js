// src/App.js
import React from 'react';

import Counter from './components/Counter'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <h1>Aplicación de Contador</h1>
      <Counter value={10} /> {/* Puedes cambiar el valor inicial aquí */}
    </div>
  );
};

export default App;

