import React, { PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';
import Stats from 'components/Stats';
import Move from 'components/Move';
import LazyLoad from 'react-lazyload';
import ActionButton from 'components/ActionButton';

export const PokemonWide = ({ pokemon, ...props }) => (
  <LazyLoad once height={300} offset={400}>
    <div style={styles.wrapper}>
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
        </div>
        <div style={styles.moveContainer}>
          <Move style={styles.move} {...pokemon.stats.move_1} />
          <Move style={styles.move} {...pokemon.stats.move_2} />
        </div>
      </Card>
      <div style={styles.actions}>
        <ActionButton style={styles.action} label="power up" />
        <ActionButton style={styles.action} label="evolve" />
        <ActionButton style={styles.action} label="transfer" />
      </div>
    </div>
  </LazyLoad>
);

PokemonWide.propTypes = {
  pokemon: PropTypes.object.isRequired
};

const styles = {
  wrapper: {
    marginBottom: 20
  },
  container: {
    width: 300,
    height: 170
  },
  imageContainer: {
    width: 150,
    height: 130,
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
    height: 130,
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
  },
  moveContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px'
  },
  move: {
    width: '48%',
    flex: '0 1 48%'
  },
  actions: {
    padding: '5px 0',
    display: 'flex',
    justifyContent: 'space-between'
  },
  action: {
    width: '32%',
    flex: '0 1 32%',
    height: '30px',
    lineHeight: '30px'
  }
};

export default Radium(PokemonWide);
