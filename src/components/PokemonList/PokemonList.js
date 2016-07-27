import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'radium-grid';
import PokemonCell from 'components/PokemonCell';
import Waypoint, { inside as PositionInside } from 'react-waypoint';

// this is used to have bottom line thats efficient
// static helpers
const spacers = [];

export class PokemonList extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    loadingError: PropTypes.string
  };

  static pageSize = 10;

  constructor(props, context) {
    super(props, context);
    this.state = { page: 1, pages: 1 };
  }

  componentDidMount() {
    if (this.props.pokemons === null) {
      this.props.fetch();
    } else {
      // we don't want to rewrite that function again, so just reuse it
      this.componentWillReceiveProps(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    const total = nextProps.pokemons && nextProps.pokemons.length || 0;
    this.setState({
      page: 1,
      pages: total ? Math.ceil(total / PokemonList.pageSize) : 1
    });
  }

  componentDidUpdate() {
    if (this.refs.waypoint && this.refs.waypoint._previousPosition === PositionInside) {
      this.renderMoreItems();
    }
  }

  renderMoreItems() {
    if (this.state.page < this.state.pages) {
      this.setState({
        page: this.state.page + 1
      });
    }
  }

  renderLoading() {
    return (
      <Cell width="1">Loading</Cell>
    );
  }

  renderPokemons() {
    const { page } = this.state;
    const { pokemons: Source } = this.props;
    const pokemons = Source && Source.slice(0, page * PokemonList.pageSize) || null;

    if (!pokemons) {
      return this.renderLoading();
    }

    if (pokemons.length === 0) {
      return (<Cell><h4>No Pokemons Fetched</h4></Cell>);
    }

    return pokemons
      .map(pokemon => (
        <Cell key={pokemon.id}>
          <PokemonCell key={pokemon.id} pokemon={pokemon} />
        </Cell>
      ));
  }

  renderError() {
    return <Cell>{this.props.loadingError}</Cell>;
  }

  renderWaypoint() {
    if (this.state.page < this.state.pages) {
      return (
        <Waypoint
          ref="waypoint"
          onEnter={::this.renderMoreItems}
          bottomOffset="-30%"
          scrollableAncestor={window}
        />
      );
    }
  }

  render() {
    const { loading, loadingError } = this.props;

    return (
      <div>
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
          {spacers}
        </Grid>
        {this.renderWaypoint()}
      </div>
    );
  }
}

const styles = {
  grid: {
    justifyContent: 'space-between'
  },
  cell: {
    height: 1,
    width: 300
  }
};

// populate cells
for (let i = 0; i < 6; ++i) {
  spacers.push(<Cell key={i}><div style={styles.cell} /></Cell>);
}

export default PokemonList;
