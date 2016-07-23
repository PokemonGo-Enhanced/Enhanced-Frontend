import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';

export class PokemonList extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    loadingError: PropTypes.string
  };

  componentWillMount() {
    this.props.fetch();
  }

  renderLoading() {
    return <Cell>Loading ~</Cell>;
  }

  renderPokemons() {
    const pokemons = this.props.pokemons;
    if (pokemons.length === 0) {
      return (<Cell><h4>No Pokemons Fetched</h4></Cell>);
    }

    return pokemons.map(pokemon => (
      <Cell key={pokemon.id}>
        <h5>{pokemon.is_egg ? `Egg: ${pokemon.egg_km_walked_target}` : pokemon.pokemon_id}</h5>
      </Cell>
    ));
  }

  renderError() {
    return <Cell>{this.props.loadingError}</Cell>;
  }

  render() {
    const { loading, loadingError } = this.props;

    return (
      <Grid>
        {loading
          ? this.renderLoading()
          : loadingError
            ? this.renderError()
            : this.renderPokemons()}
      </Grid>
    );
  }
}

export default Radium(PokemonList);
