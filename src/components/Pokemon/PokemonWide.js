import React, { PropTypes } from 'react';
import Radium from 'radium';

export const PokemonWide = ({ pokemon, ...props }) => (
  <div style={styles.container}>
    {pokemon.pokemon_id}
  </div>
);

PokemonWide.propTypes = {
  pokemon: PropTypes.object.isRequired
};

const styles = {
  container: {
    width: 300
  }
};

export default Radium(PokemonWide);
