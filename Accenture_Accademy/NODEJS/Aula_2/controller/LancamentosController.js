const MongoDbRepository = require('../repositories/MongoDbRepository.js');
const LancamentosRepository = require('../repositories/LancamentosRepository.js');

exports.listarLancamentos = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repositorio = new LancamentosRepository(db);

  return repositorio.list();
};

exports.listarReceitas = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repositorio = new LancamentosRepository(db);

  return repositorio.list({ valor: { $gte: 0 } });
};

exports.listarDespesas = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repositorio = new LancamentosRepository(db);

  return repositorio.list({ valor: { $lt: 0 } });
};

exports.obterLancamento = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repositorio = new LancamentosRepository(db);

  const lancamento = await repositorio.getById(req.params.id);

  return lancamento;
};

exports.inserirLancamento = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repoLancamentos = new LancamentosRepository(db);
  const repoCategorias = new MongoDbRepository(db, 'categorias');

  const { descricao, valor, categoria: nome } = req.payload;

  const categoria = await repoCategorias({ nome }, { projection: { _id: 1 } });
  const lancamento = {
    descricao,
    valor,
    categoria: categoria?._id,
    criacao: new Date()
  }

  return repoLancamentos.insert(lancamento);
};

exports.atualizarLancamento = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repoLancamentos = new LancamentosRepository(db);
  const repoCategorias = new MongoDbRepository(db, 'categorias');

  const { categoria: nome } = req.payload;
  const lancamento = req.payload;

  if (nome) {
    const categoria = await repoCategorias({ nome }, { projection: { _id: 1 } });
    lancamento.categoria = categoria?._id;
  }

  return repoLancamentos.update(req.params.id, lancamento);
};

exports.apagarLancamento = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repoLancamentos = new LancamentosRepository(db);

  return repoLancamentos.delete(req.params.id);
};

exports.obterSaldo = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repoLancamentos = new LancamentosRepository(db);

  const saldo = await repoLancamentos.obterSaldo();

  return saldo;
};

exports.agruparPorCategoria = async (req, _h) => {
  const db = req.server.plugins['hapi-mongodb'].db;
  const repoLancamentos = new LancamentosRepository(db);

  return repoLancamentos.resumoPorCategoria();
};
