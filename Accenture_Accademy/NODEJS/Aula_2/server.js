const Hapi = require('@hapi/hapi');
const rotas = require('./routes.js');
const AutorizacaoMiddleware = require('./middlewares/AutorizacaoMiddleware.js');
const MongoDbMiddleware = require('./middlewares/MongoDbMiddleware.js');

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await AutorizacaoMiddleware(server);
  await MongoDbMiddleware(server);

  rotas.forEach(rota => server.route(rota));

  await server.start();
  console.log('Nosso servidor está esperando requisições');
})();
