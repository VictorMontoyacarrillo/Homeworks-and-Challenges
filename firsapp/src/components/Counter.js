// src/components/Counter.js
import React, { useState } from 'react';

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value); // Inicializa el contador con el valor recibido

  const handleSubtract = () => {
    setCounter(counter - 1); // Resta 1 al contador
  };

  const handleReset = () => {
    setCounter(value); // Restablece el contador al valor inicial
  };

  return (
    <div>
      <span>{counter}</span> {/* Muestra el valor del contador */}
      <div>
        <button onClick={handleSubtract}>Restar</button>
        <button onClick={handleReset}>Restablecer</button>
      </div>
    </div>
  );
};

export default Counter;
