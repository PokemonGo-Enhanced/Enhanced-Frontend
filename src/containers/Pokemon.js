import { connect } from 'react-redux';
import { evolve, powerup, release } from 'store/modules/pokemons';
import { open, close } from 'store/modules/modal';
import Pokemon from 'components/Pokemon';

const mapActionsToProps = (dispatch, { pokemon }) => ({
  evolve: () => {
    dispatch(open({
      modalType: 'confirm',
      modalProps: {
        question: `Evolve ${pokemon.pokemon_id}?`,
        confirm: () => dispatch(evolve(pokemon)),
        decline: () => dispatch(close())
      }
    }));
  },

  powerup: () => {
    dispatch(open({
      modalType: 'confirm',
      modalProps: {
        question: `Power Up ${pokemon.pokemon_id}?`,
        confirm: () => dispatch(powerup(pokemon)),
        decline: () => dispatch(close())
      }
    }));
  },

  release: () => {
    dispatch(open({
      modalType: 'confirm',
      modalProps: {
        question: `Release ${pokemon.pokemon_id}?`,
        confirm: () => dispatch(release(pokemon)),
        decline: () => dispatch(close())
      }
    }));
  }
});

export default connect(null, mapActionsToProps)(Pokemon);
