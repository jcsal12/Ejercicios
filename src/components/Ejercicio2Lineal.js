import React from 'react';
//SOLUCION BÚSQUEDA LINEAL (CREO QUE MENOS EFICIENTE QUE LA BINARIA)
function Ejercicio2Lineal() {
  const listado = [2, 4, 5, 7, 9, 10, 14, 16, 17, 21, 24, 27, 28, 29, 33, 36, 40, 41, 43, 48, 49, 57, 58, 59, 61, 63, 66, 69, 70, 76, 80, 83, 87, 92, 99, 100];

  let indiceBuscado = -1;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i] === 63) {
      indiceBuscado = i;
      break; 
    }
  }

  return (
    <div>
      <h1>EJERCICIO 2 - Búsqueda lineal</h1>
      <p>Índice del valor 63: {indiceBuscado}</p>
    </div>
  );
}

export default Ejercicio2Lineal;