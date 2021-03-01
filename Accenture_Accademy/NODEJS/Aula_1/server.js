import http from 'http';

const rotas = {
  'GET/javascript': (_req, res) => {
    res.write('ORA ORA VOCÊ DESCOBRIU A ROTA');
  },
  'POST/phyton': (_req, res) => {
    res.write('ORA ORA VOCÊ DESCOBRIU PHYTON');
  },
};

const middlewares = [];

const adicionarMiddleware = (middleware) => {
  middlewares.push(middleware);
};

const middlewareUrl = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  req.rota = url.pathname;
};

const status200 = (req, res) => res.statusCode = 200;

const receberRequisicao = (req, res) => {
  middlewares.forEach((middleware) => middleware(req, res));

  const rotaEncontrada = rotas[`${req.method.toUpperCase()}${req.rota}`];

  if (rotaEncontrada) {
    rotaEncontrada(req, res);
  } else {
    res.statusCode = 404;
  }

  console.log(`${res.statusCode} ${req.rota}`);
  res.end();
};

adicionarMiddleware(middlewareUrl);
adicionarMiddleware(status200);

const server = http.createServer(receberRequisicao);

server.listen(3000, () => {
  console.log('Nosso servidor está rodando e esperando requisições');
});
