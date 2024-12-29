const express = require('express');

const app = express();


const port = 3000;


app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación Express!');
});


app.get('/contact', (req, res) => {
  res.send('Página de contacto: Puedes escribirnos a contacto@miempresa.com');
});


app.get('/services', (req, res) => {
  res.send('Ofrecemos servicios de desarrollo web, aplicaciones móviles y consultoría tecnológica.');
});

app.get('/pp', (req, res) => {
    res.send('¡Bienvenido a la aplicación Express de PP!');
  });

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:${port}');
});