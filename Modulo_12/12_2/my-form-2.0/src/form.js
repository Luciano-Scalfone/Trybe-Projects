import React, { Component, useCallback } from 'react';
import Buttons from './botoes';

class Form extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      keyWord: '',
      nome: '',
      preferedState: '',
      number: undefined,
      check: false,
      formularioComErros: false,
    }
  }

  handleError = ({ target }) => {
    const { value } = target;
    
    if(value.length > 5) {
      this.setState(() => ({
        formularioComErros: true,
      }));
    }
  }

  handleClick = (callback, { target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    callback();

    this.setState({
      [name]: value,
    })
  } 

  render() {
    return (
      <form>
        <fieldset>
          <select name="keyWord" value={this.state.keyWord} onChange={this.handleClick} >
            <option value="React">React</option>
            <option value="JSX">JSX</option>
            <option value="Trybe">Trybe</option>
            <option value="Success">Success</option>
          </select>
          <Buttons state={this.state} handleClick={() => {this.handleClick(this.handleError)}} handleError={this.handleError} />
        </fieldset>
      </form>
    )
  }
}

export default Form;

/* <legend>Dados Pessoais</legend>
          <label class="label" for="full-name">Nome Completo</label>
          <div class="control">
            <input required class="input is-primary" type="text" name="full-name" id="full-name" maxlength="40" />
          </div>

          <label class="label" for="email">E-mail</label>
          <div class="control">
            <input required class="input is-primary" type="email" name="email" id="email" maxlength="40" />
          </div>

          <label class="label" for="cpf">CPF</label>
          <div class="control">
            <input required class="input is-primary" type="number" name="cpf" id="cpf" maxlength="40" />
          </div>

          <label class="label" for="endereco">Endereço</label>
          <div class="control">
            <input required class="input is-primary" type="text" name="endereco" id="endereco" maxlength="200" />
          </div>

          <label class="label" for="cidade">cidade</label>
          <div class="control">
            <input required class="input is-primary" type="text" name="cidade" id="cidade" maxlength="28" />
          </div>

          <label class="label" for="estado">Estado</label>
          <div class="control">
            <div class="select is-primary" >
              <select required name="estado" id="estado"></select>
            </div>
          </div>

          <label class="label" for="tipo-casa">Tipo de Casa</label>
          <div class="control">
            <label for="casa">
              <input required type="radio" name="tipo-casa" id="casa" value="casa" />
            Casa</label>
          </div>    
          <div class="control">
            <label for="apartamento">
              <input type="radio" name="tipo-casa" id="apartamento" value="apartamento" />
            Apartamento</label> 
          </div>     
        </fieldset>
        <fieldset class="field">
          <legend>Último Emprego</legend>
          <label class="label resumo-curriculo">Resumo do Currículo</label>
          <div class="control">
            <textarea required class="textarea is-small is-primary" name="resumo-curriculo" id="resumo-curriculo" maxlength="1000" cols="30" rows="10"></textarea>
          </div>  

          <label class="label" for="cargo">Cargo</label>
          <div class="control">
            <input class="input is-primary" type="text" name="cargo" id="cargo" />
          </div>
          <label class="label" for="cargo">Descrição</label>
          <div class="control">
            <textarea required class="textarea is-small is-primary" name="desc-cargo" id="desc-cargo" maxlength="500" cols="30" rows="10"></textarea>
          </div>

          <label class="label" for="data-inicio">Data de início</label>
          <div class="control">
            <input class="input is-primary" type="date" name="data-inicio" id="data-inicio" min="1950-01-01" />
          </div> */