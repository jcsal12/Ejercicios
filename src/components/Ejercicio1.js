import React from 'react';

function Ejercicio1() {
  let elementosLista = [];

  for (let i = 1; i <= 100; i++) {
    let contenido = i;

    if (i % 3 === 0 && i % 5 === 0) {
      contenido = `${i} SENSESBIT`;
    } else if (i % 3 === 0) {
      contenido = `${i} BIT`;
    } else if (i % 5 === 0) {
      contenido = `${i} SENSES`;
    }

    elementosLista.push(
      <li key={i}>
        {contenido}
      </li>
    );
  }

  return (
    <div>
      <h1>EJERCICIO 1</h1>
      <ul>
        {elementosLista}
      </ul>
    </div>
  );
}

export default Ejercicio1;
