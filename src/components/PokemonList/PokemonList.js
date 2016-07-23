import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import PokemonCell from 'components/PokemonCell';

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

    return pokemons
      .map(pokemon => (
        <Cell key={pokemon.id}>
          <PokemonCell pokemon={pokemon} />
        </Cell>
      ));
  }

  renderError() {
    return <Cell>{this.props.loadingError}</Cell>;
  }

  render() {
    const { loading, loadingError } = this.props;

    return (
      <Grid style={styles.grid}>
        {loading
          ? this.renderLoading()
          : loadingError
            ? this.renderError()
            : this.renderPokemons()}
      </Grid>
    );
  }
}

const styles = {
  grid: {
    justifyContent: 'flex-start'
  }
};

export default Radium(PokemonList);
