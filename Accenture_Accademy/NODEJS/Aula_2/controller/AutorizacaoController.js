const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

const connectionString = 'mongodb://localhost:27017/teste';

exports.token = async (req, h) => {
  const response = h.response;
  const { authorization } = req.headers;

  if (!authorization) {
    response.code(401);
    return { error: 'authorização naofoi enviada!' };
  }

  const [scheme, valor] = authorization.split(' ');

  if (scheme !== 'Basic') {
    response.statusCode = 401;
    return;
  }

  const credenciais = Buffer.from(valor, 'base64').toString();
  const [email, senha] = credenciais.split(':');

  if (!email|| !senha) {
    response.statusCode = 401;
    return;
  }

  const client = MongoClient.connect(connectionString);
  const db = (await client).db('teste');

  const usuario = await db.collection('usuarios').findOne({ email, senha });

  if (!usuario) {
    response.statusCode = 401;
    return;
  }

  const token = jwt.sign({ sub: usuario._id.toString() }, 'chavesecreta');

  return {
    access_token: token,
  }
};
