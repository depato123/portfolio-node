const express = require('express');
const next = require('./client/node_modules/next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './client' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  // Todas las demás rutas las maneja Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});