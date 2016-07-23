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

  // hack to use space-between
  renderSizingRow() {
    const spacers = [];
    for (let i = 0; i < 6; ++i) {
      spacers.push(<Cell key={i}><div style={styles.cell} /></Cell>);
    }
    return spacers;
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
      <Grid
        style={styles.grid}
        cellAlign="center"
        smallCellWidth="1/2"
        mediumCellWidth="1/3"
        largeCellWidth="1/4"
        xlargeCellWidth="1/6"
      >
        {loading
          ? this.renderLoading()
          : loadingError
            ? this.renderError()
            : this.renderPokemons()}
        {this.renderSizingRow()}
      </Grid>
    );
  }
}

const styles = {
  grid: {
    justifyContent: 'space-around'
  },
  cell: {
    height: 1,
    width: 300
  }
};

export default Radium(PokemonList);
