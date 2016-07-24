import React, { PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';

export const PokemonWide = ({ pokemon, ...props }) => (
  <Card style={styles.container} zDepth={0}>
    <div>{pokemon.id}</div>
    <div>{pokemon.pokemon_id}</div>
    <div>ATK {pokemon.individual_attack}/15</div>
    <div>DEF {pokemon.individual_defense}/15</div>
    <div>STA {pokemon.individual_stamina}/15</div>
    <div>Move 1 {pokemon.move_1}</div>
    <div>Move 2 {pokemon.move_2}</div>
    <div>CP {pokemon.cp} / {pokemon.stats.maxCombatPower}</div>
    <div>IV {pokemon.stats.powerQuotient}%</div>
    <div>IV Influence {pokemon.stats.IVInfluence}</div>
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
