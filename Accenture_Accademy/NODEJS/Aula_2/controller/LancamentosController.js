const { MongoClient, ObjectId } = require('mongodb');

async function obterCategoria(db, nome) {
  const categoria = await db.collection('categorias').findOne(
    { nome },
    { projection: { _id: 1 } }
  );

  return categoria?._id;
};

async function obterSaldo(db) {
  const resultado = await db.collection('lancamentos').aggregate([
    {
      $group: {
        _id: '',
        saldo: { $sum: '$$ROOT.valor' }
      }
    },
  ]).toArray();
  const [{ saldo }] = resultado;

  return saldo;
};

const connectionString = 'mongodb://localhost:27017/teste';

async function listarLancamentos(filtro) {
  const client = await MongoClient.connect(connectionString);
  const db = client.db('teste');

  const lancamentos = await db.collection('lancamentos').find(filtro).toArray();

  await client.close;

  return lancamentos;
}

exports.listarLancamentos = async (req, h) => {
  return listarLancamentos();
};

exports.listarReceitas = async (req, h) => {
  return listarLancamentos({ valor: { $gte: 0 } });
};

exports.listarDespesas = async (req, h) => {
  return listarLancamentos({ valor: { $lt: 0 } });
};

exports.obterLancamento = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const { id } = req.params;

  const lancamentos = await db.collection('lancamentos').findOne(ObjectId(id));

  await client.close;

  return lancamentos;
};

exports.inserirLancamento = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const { descricao, valor, categoria: getCategoria } = req.payload;

  const categoria = await obterCategoria(db, getCategoria);

  const resultado = await db.collection('lancamentos').insertOne({
    descricao,
    valor,
    categoria,
    criacao: new Date()
  });

  await client.close;

  return resultado.ops[0];
};

exports.atualizarLancamento = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const { id } = req.params;
  const { categoria } = req.payload;
  const lancamento = req.payload;

  if (categoria) {
    lancamento.categoria = await obterCategoria(db, categoria);
  }

  const resultado = await db.collection('lancamentos').updateOne(
    { _id: ObjectId(id) },
    { $set: lancamento }
  );

  await client.close;

  return resultado.modifiedCount;
};

exports.apagarLancamento = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const { id } = req.params;

  const lancamentos = await db.collection('lancamentos').findOne(ObjectId(id));

  if (!lancamentos) console.log('Id Inexistente')

  const resultado = await db.collection('lancamentos').deleteOne({ _id: ObjectId(id) });

  await client.close;

  return resultado;
};

exports.obterSaldo = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const saldo = await obterSaldo(db);

  await client.close;

  return saldo;
};

exports.agruparPorCategoria = async (req, h) => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db('teste');

  const agrupamentos = await db.collection('lancamentos').aggregate([
    {
      $group: {
        _id: '$categoria',
        total: { $sum: '$$ROOT.valor' }
      }
    },
    {
      $lookup: {
        from: 'categorias',
        localField: '_id',
        foreignField: '_id',
        as: 'categoria'
      }
    },
    { $unwind: '$categoria' },
    { $project: { total: 1, categoria: '$categoria.nome', _id: 0 } }
  ]).toArray();

  const resultado = agrupamentos.reduce((acumulador, { total, categoria }) => {
    acumulador[categoria] = total;

    return acumulador;
  }, {});

  await client.close;

  return resultado;
};
