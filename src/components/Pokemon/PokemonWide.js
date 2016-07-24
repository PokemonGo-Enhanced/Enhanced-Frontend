import React, { PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';
import Stats from 'components/Stats';

export const PokemonWide = ({ pokemon, ...props }) => (
  <Card style={styles.container} zDepth={0}>
    <div style={styles.imageContainer}>
      <img src={pokemon.picture} style={styles.image} />
    </div>
    <div style={styles.info}>
      <h2 style={styles.header}>{pokemon.pokemon_id}</h2>
      <div>
        CP <b style={styles.em}>{pokemon.cp}</b>
        <span style={styles.subtle}> / {pokemon.stats.maxCombatPower}</span>
      </div>
      <Stats current={pokemon.individual_stamina} type="STA" />
      <Stats current={pokemon.individual_attack} type="ATK" />
      <Stats current={pokemon.individual_defense} type="DEF" />
      <Stats current={pokemon.stats.level} max={79} type="LVL" />
    </div>
    <div>{pokemon.stats.move_1.prettyName}: {pokemon.stats.move_1.power}, {pokemon.stats.move_1.type}</div>
    <div>{pokemon.stats.move_2.prettyName}: {pokemon.stats.move_2.power}, {pokemon.stats.move_2.type}</div>
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
  },
  imageContainer: {
    width: 150,
    height: 150,
    textAlign: 'center',
    display: 'inline-block',
    padding: '20px'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  info: {
    width: 135,
    height: 150,
    display: 'inline-block',
    verticalAlign: 'top'
  },
  header: {
    margin: '10px 0',
    color: '#666',
    fontSize: '18px'
  },
  em: {
    fontWeight: 600,
    fontSize: '20px'
  },
  subtle: {
    color: '#ccc'
  }
};

export default Radium(PokemonWide);
