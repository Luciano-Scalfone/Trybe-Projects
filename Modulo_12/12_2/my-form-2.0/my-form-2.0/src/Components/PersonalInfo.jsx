import React, { Component } from 'react';
import { connect } from 'react-redux';
import addValue from '../action';

class PersonalInfo extends Component {
  render() {
    const { inputAdd, nome } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>
            Nome:
            <input required type="text" name="nome" maxLength="40" onChange={e => inputAdd(e)} />
          </label>
          <label>
            Email:
            <input required type="email" name="email" maxLength="50" onChange={e => inputAdd(e)} pattern={/^[a-zA-Z0-9.!#$%&_-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}/>
          </label>
          <label>
            CPF:
            <input required type="text" name="cpf" maxLength="11" onChange={e => inputAdd(e)} />
          </label>
          <label>
            Endereço:
            <input required type="text" name="endereço" maxLength="200" onChange={e => inputAdd(e)} />
          </label>
          <label>
            Cidade:
            <input required type="text" name="cidade" maxLength="28" onChange={e => inputAdd(e)} />
          </label>
          <label>
            Residência:
            <label>
              <input type="radio" name="residencia" value="casa" onChange={e => inputAdd(e)} />
              casa
            </label>
            <label>
              <input type="radio" name="residencia" value="apartamento" onChange={e => inputAdd(e)} />
              Apartamento
            </label>
          </label>
        </fieldset>
        <h1>{nome}</h1>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  inputAdd: (e) => dispatch(addValue(e)),
});

export default connect(null, mapDispatchToProps)(PersonalInfo);
