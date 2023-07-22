import React from 'react';
import _ from 'lodash';

function Ejercicio1() {
  const texto = "¡Bienvenido! y esperamos que formes parte de la familia SENSESBIT. Sensesbit está en constante crecimiento y tu puedes ser parte de él, ten un felíz finde y nuevamente bienvenido por parte de todos; hasta la próxima y disfruta de esta prueba";

  const resultado = contarPalabras(texto);

  return (
    <div>
      <h1>EJERCICIO 3</h1>
      <p>Texto: {texto}</p>
      <ul>
        {Object.keys(resultado).map((palabra) => (
          <li key={palabra}>{palabra}: {resultado[palabra]}</li>
        ))}
      </ul>
    </div>
  );
}

function contarPalabras(texto) {
  // Utilizamos lodash para dividir las palabras de manera precisa
  const palabras = _.words(texto.toLowerCase());

  // Creamos un diccionario para almacenar la frecuencia de cada palabra
  const frecuencia = {};

  palabras.forEach((palabra) => {
    frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
  });

  return frecuencia;
}

export default Ejercicio1;