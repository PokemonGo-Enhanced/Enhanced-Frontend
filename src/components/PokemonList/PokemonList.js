import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';

export class PokemonList extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { pokemons } = this.props;

    return (
      <Grid>
        {pokemons.map(pokemon => (
          <Cell key={pokemon.id}>
            <h5>{pokemon.pokemon_id}</h5>
          </Cell>
        ))}
      </Grid>
    );
  }
}

export default Radium(PokemonList);
