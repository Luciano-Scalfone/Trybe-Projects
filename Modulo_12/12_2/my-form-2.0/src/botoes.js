import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { state, handleClick } = this.props;

    return (
      <div>
        <div>
          <input type="text" name="nome" value={state.nome} onChange={handleClick} />
          <span>{state.formularioComErros ? 'Campo inválido!' : ''}</span>
        </div>
        <div>
          <input type="number" name="number" value={state.number} onChange={handleClick} />
          <span>{state.formularioComErros ? 'Campo inválido!' : ''}</span>
        </div>
        <textarea name="preferedState" value={state.preferedState} onChange={handleClick} ></textarea>
        <input type="checkbox" name="check" checked={state.check} onChange={handleClick} />
        <input type="file" ref={this.fileInput} />
      </div>
    )
  }
}

export default Buttons;
