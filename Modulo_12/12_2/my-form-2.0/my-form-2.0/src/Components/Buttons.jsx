import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { handleClick, handleClean } = this.props;

    return ( 
      <fieldset>
        <button type="submit" onClick={handleClick} >Enviar</button>
        <button type="button" onClick={handleClean} >Limpar</button>
      </fieldset>
    );
  } ;
};

export default Buttons;
