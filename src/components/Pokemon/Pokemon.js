import React, { PropTypes } from 'react';
import Radium from 'radium';
import PokemonWide from './PokemonWide';

const TypeMap = {
  wide: PokemonWide
};

export const Pokemon = ({ pokemon, type, ...props }) => {
  const Component = TypeMap[type];
  return <Component {...props} pokemon={pokemon} />;
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default Radium(Pokemon);
