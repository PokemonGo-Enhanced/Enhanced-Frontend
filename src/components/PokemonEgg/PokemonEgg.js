import React, { PropTypes } from 'react';
import Radium from 'radium';

export const PokemonEgg = ({ pokemon, ...props }) => (
  <div style={styles.container}>
    <h5>Egg: {pokemon.egg_km_walked_target}</h5>
  </div>
);

PokemonEgg.propTypes = {
  pokemon: PropTypes.object.isRequired
};

const styles = {
  container: {
    width: 300,
    height: 200,
    marginBottom: 20
  }
};

export default Radium(PokemonEgg);
