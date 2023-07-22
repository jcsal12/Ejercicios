import React from 'react';
//SOLUCION BÚSQUEDA BINARIA (CREO QUE MÁS EFICIENTE QUE LA LINEAL)
function Ejercicio2Binario() {
  const lista = [2, 4, 5, 7, 9, 10, 14, 16, 17, 21, 24, 27, 28, 29, 33, 36, 40, 41, 43, 48, 49, 57, 58, 59, 61, 63, 66, 69, 70, 76, 80, 83, 87, 92, 99, 100];

  let indiceBuscado = -1;
  let inicio = 0;
  let final = lista.length - 1;

  while (inicio <= final) {
    const mitad = Math.floor((inicio + final) / 2);

    if (lista[mitad] === 63) {
      indiceBuscado = mitad;
      break;
    } else if (lista[mitad] < 63) {
      inicio = mitad + 1;
    } else {
      final = mitad - 1;
    }
  }

  return (
    <div>
      <h1>EJERCICIO 2 - Búsqueda binaria</h1>
      <p>Índice del valor 63: {indiceBuscado}</p>
    </div>
  );
}

export default Ejercicio2Binario;