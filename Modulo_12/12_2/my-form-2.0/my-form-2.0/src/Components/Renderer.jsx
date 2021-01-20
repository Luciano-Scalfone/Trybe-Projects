import React, { Component } from 'react';

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {render: false, ...this.props.forms};
  }
  render() {
    if(this.setState.render) {
      const { nome, email, cpf, endereço, residencia, cidade, cargo, descricao, resumo } = this.state;

      return (
        <section>
          <h1>nome:<span>{nome}</span></h1>
          <h1>email:<span>{email}</span></h1>
          <h1>cpf:<span>{cpf}</span></h1>
          <h1>endereço:<span>{endereço}</span></h1>
          <h1>residencia:<span>{residencia}</span></h1>
          <h1>cidade:<span>{cidade}</span></h1>
          <h1>cargo:<span>{cargo}</span></h1>
          <h1>descrição:<span>{descricao}</span></h1>
          <h1>resumo:<span>{resumo}</span></h1>
        </section>
      );
    }
    return (
      <section></section>
    )
  };
};

export default Renderer;
