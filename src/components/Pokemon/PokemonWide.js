import React, { PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';

export const PokemonWide = ({ pokemon, ...props }) => (
  <Card style={styles.container} zDepth={0}>
    <div>{pokemon.id}</div>
    <div>{pokemon.pokemon_id}</div>
    <div>Level {pokemon.stats.level}</div>
    <div>Stardust & candies to max: {pokemon.stats.stardustToMax} / {pokemon.stats.candiesToMax}</div>
    <div>
      ATK {pokemon.individual_attack}/15
      DEF {pokemon.individual_defense}/15
      STA {pokemon.individual_stamina}/15
    </div>
    <div>{pokemon.stats.move_1.prettyName}: {pokemon.stats.move_1.power}, {pokemon.stats.move_1.type}</div>
    <div>{pokemon.stats.move_2.prettyName}: {pokemon.stats.move_2.power}, {pokemon.stats.move_2.type}</div>
    <div>CP {pokemon.cp} / {pokemon.stats.maxCombatPower}</div>
    <div>IV & Influence {pokemon.stats.powerQuotient}% | {pokemon.stats.IVInfluence}</div>
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
