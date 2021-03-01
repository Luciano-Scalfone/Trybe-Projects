const LancamentosController = require('./controller/LancamentosController.js');

module.exports = [
  {
    method: 'GET',
    path: '/lancamentos',
    handler: LancamentosController.listarLancamentos
  },
  {
    method: 'GET',
    path: '/lancamentos/{id}',
    handler: LancamentosController.obterLancamento
  },
  {
    method: 'POST',
    path: '/lancamentos',
    handler: LancamentosController.inserirLancamento
  },
  {
    method: 'PATCH',
    path: '/lancamentos/{id}',
    handler: LancamentosController.atualizarLancamento
  },
  {
    method: 'DELETE',
    path: '/lancamentos/{id}',
    handler: LancamentosController.apagarLancamento
  },
  {
    method: 'GET',
    path: '/lancamentos/saldo',
    handler: LancamentosController.obterSaldo
  },
  {
    method: 'GET',
    path: '/lancamentos/receitas',
    handler: LancamentosController.listarReceitas
  },
  {
    method: 'GET',
    path: '/lancamentos/despesas',
    handler: LancamentosController.listarDespesas
  },
  {
    method: 'GET',
    path: '/lancamentos/por-categoria',
    handler: LancamentosController.agruparPorCategoria
  }
];