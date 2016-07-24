import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { pokemonsByDateSelector, fetchPokemons, loadingSelector, errorSelector } from 'store/modules/pokemons';
import PokemonList from 'components/PokemonList';

const mapStateToProps = createStructuredSelector({
  pokemons: pokemonsByDateSelector,
  loading: loadingSelector,
  loadingError: errorSelector
});

const mapActionsToProps = {
  fetch: fetchPokemons
};

export default connect(mapStateToProps, mapActionsToProps)(PokemonList);
