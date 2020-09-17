import Pokemon from './pokemon';
import React from 'react';
import pokemons from './data';

class Pokedex extends React.Component {
  render () {
    return (
      <div className="pokedex">
        <div>
          {pokemons.map(pokeElement => <Pokemon key={pokeElement.id} pokemon={pokeElement} />)}
        </div>
      </div>
    )
  }
}

export default Pokedex;
