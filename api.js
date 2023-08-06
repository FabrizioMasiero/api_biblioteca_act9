const express = require('express');
const app = express();

// Define tu nuevo endpoint
app.get('/api/nuevo-endpoint', (req, res) => {
  // Lógica de tu nuevo endpoint
  res.json({ message: '¡Hola desde el nuevo endpoint!' });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
