import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { pokemonsByDateSelector, fetchPokemons } from 'store/modules/pokemons';
import PokemonList from 'components/PokemonList';

const mapStateToProps = createStructuredSelector({
  pokemons: pokemonsByDateSelector
});

const mapActionsToProps = {
  fetch: fetchPokemons
};

export default connect(mapStateToProps, mapActionsToProps)(PokemonList);
