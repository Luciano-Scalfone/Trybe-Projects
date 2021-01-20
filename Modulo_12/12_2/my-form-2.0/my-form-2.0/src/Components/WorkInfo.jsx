import React, { Component } from 'react';
import { connect } from 'react-redux';
import addValue from '../action';

class WorkInfo extends Component {
  render() {
    const { inputAdd } = this.props;
    return ( 
      <div>
        <fieldset>
          <legend>Último Emprego</legend>
          <label>
            Resumo do Currículo
            <textarea required maxLength="1000" name="resumo" onChange={e => inputAdd(e)}/>
          </label>
          <label>
            Cargo
            <textarea required maxLength="40" name="cargo" onChange={e => inputAdd(e)} />
          </label>
          <label>
            Descrição do cargo
            <textarea required maxLength="500" name="descricao" onChange={e => inputAdd(e)} />
          </label>
        </fieldset>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  inputAdd: (e) => dispatch(addValue(e)),
});

export default connect(null, mapDispatchToProps)(WorkInfo);
