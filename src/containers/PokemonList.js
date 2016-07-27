import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sortSelector, fetchPokemons, loadingSelector, errorSelector } from 'store/modules/pokemons';
import PokemonList from 'components/PokemonList';

const mapStateToProps = createStructuredSelector({
  pokemons: sortSelector,
  loading: loadingSelector,
  loadingError: errorSelector
});

const mapActionsToProps = {
  fetch: fetchPokemons
};

export default connect(mapStateToProps, mapActionsToProps)(PokemonList);
