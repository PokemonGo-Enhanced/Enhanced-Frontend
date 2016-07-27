import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sortBySelector, switchSort } from 'store/modules/pokemons';
import PokemonSort from 'components/PokemonSort';

const mapStateToProps = createStructuredSelector({
  sortBy: sortBySelector
});

const mapActionsToProps = {
  setSort: (e, key, value) => switchSort(value)
};

export default connect(mapStateToProps, mapActionsToProps)(PokemonSort);
