import { connect } from 'react-redux';
import { evolve, powerup, release } from 'store/modules/pokemons';
import Pokemon from 'components/Pokemon';

const mapActionsToProps = (dispatch, { pokemon }) => ({
  evolve: () => dispatch(evolve(pokemon)),
  powerup: () => dispatch(powerup(pokemon)),
  release: () => dispatch(release(pokemon))
});

export default connect(null, mapActionsToProps)(Pokemon);
