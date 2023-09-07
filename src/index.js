// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css'; // Asegúrate de tener un archivo CSS global o elimina esta línea si no lo necesitas.
// import App from './App';
// import 'tailwindcss/tailwind.css'; // Importa los estilos de Tailwind CSS

// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// // Si deseas medir el rendimiento de tu aplicación, puedes habilitar reportWebVitals.
// // Esto es opcional y puedes eliminarlo si no lo necesitas.
// reportWebVitals();



// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css'; // Asegúrate de tener un archivo CSS global o elimina esta línea si no lo necesitas.
import App from './App';
import 'tailwindcss/tailwind.css'; // Importa los estilos de Tailwind CSS

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento de tu aplicación, puedes habilitar reportWebVitals.
// Esto es opcional y puedes eliminarlo si no lo necesitas.
reportWebVitals();
