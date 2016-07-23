import React, { PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';

export const PokemonWide = ({ pokemon, ...props }) => (
  <Card style={styles.container} zDepth={0}>
    {pokemon.pokemon_id}
  </Card>
);

PokemonWide.propTypes = {
  pokemon: PropTypes.object.isRequired
};

const styles = {
  container: {
    width: 300,
    height: 200,
    marginBottom: 20
  }
};

export default Radium(PokemonWide);
