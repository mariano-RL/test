const express = require('express');
const app = express();
const port = 3000;

app.get('/respuesta/:parametro', (req, res) => {
  const parametro = req.params.parametro;  // Obtiene el parámetro de la URL

  if (parametro === 'saludo') {
    res.send('¡Hola, bienvenido!');
  } else if (parametro === 'despedida') {
    res.send('¡Hasta luego, ha sido un gusto!');
  } else if (parametro === 'informacion') {
    res.send('Este es un sistema que responde dinámicamente según el parámetro.');
  } else {
    res.send('Parámetro ${parametro} no reconocido. Intenta con saludo, despedida o informacion.');
  } 

});


app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:${port}');
});