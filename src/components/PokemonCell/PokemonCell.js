import React, { PropTypes } from 'react';
import Radium from 'radium';
import PokemonEgg from 'components/PokemonEgg';
import Pokemon from 'components/Pokemon';
import pure from 'recompose/pure';

export const PokemonCell = ({ pokemon, type, ...props }) => (
  <div {...props}>
    {pokemon.is_egg
      ? <PokemonEgg type={type} pokemon={pokemon} />
      : <Pokemon type={type} pokemon={pokemon} />
    }
  </div>
);

PokemonCell.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

PokemonCell.defaultProps = {
  type: 'wide'
};

export default pure(Radium(PokemonCell));
