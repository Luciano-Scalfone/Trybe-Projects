const { MongoClient } = require('mongodb');

const [,, descricao, valorString, nomeCategoria] = process.argv;
const valor = parseFloat(valorString);

let db;

async function obterSaldo() {
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
}

(async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  db = client.db('teste');

  const categoria = await db.collection('categorias').findOne({ nome: nomeCategoria });

  if (!categoria) {
    console.error('categoria não encontrada');
    
    await client.close();
    process.exit(1);
  }

  const lancamento = {
    descricao,
    valor,
    categoria: categoria._id,
    criacao: new Date(),
  };

  const resultado = await db.collection('lancamentos').insertOne(lancamento);

  if (resultado.result.ok) {
    const saldo = await obterSaldo();

    console.log(`seu novo saldo é ${saldo}`)
  } else {
    console.error('erro na inserção');
  };

  await client.close();
})();