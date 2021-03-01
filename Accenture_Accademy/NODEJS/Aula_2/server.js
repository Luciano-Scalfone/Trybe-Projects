const Hapi = require('@hapi/hapi');
const rotas = require('./routes.js');

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  rotas.forEach(rota => server.route(rota));

  await server.start();
  console.log('Nosso servidor está esperando requisições');
})();