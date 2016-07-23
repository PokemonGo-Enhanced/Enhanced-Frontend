import React, { PropTypes } from 'react';
import Radium from 'radium';

export const PokemonEgg = ({ pokemon, ...props }) => (
  <h5>Egg: {pokemon.egg_km_walked_target}</h5>
);

PokemonEgg.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default Radium(PokemonEgg);
