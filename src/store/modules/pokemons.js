import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import http from 'helpers/http';
import keyBy from 'lodash/keyBy';
import sortBy from 'lodash/sortBy';

export const loading = createAction('@pokemons/loading');
export const loaded = createAction('@pokemons/loading');
export const fetchPokemons = createAction('@pokemons/fetch', () => (dispatch) => {
  dispatch(loading());
  return http
    .get('/pokemon')
    .finally(() => dispatch(loaded()));
});

export const pokemonSelector = state => state.pokemons.pokemons;
export const pokemonsByDateSelector = createSelector(
  pokemonSelector,
  pokemons => sortBy(pokemons, 'creation_time_ms')
);

export const initialState = {
  loading: false,
  error: null,
  pokemons: {}
};

export const pokemonsReducer = handleActions({

  [loading]: (state) => ({
    ...state,
    loading: true
  }),

  [loaded]: (state) => ({
    ...state,
    loading: false
  }),

  [fetchPokemons]: {
    next: (state, { payload }) => ({
      ...state,
      error: null,
      pokemons: keyBy(payload, 'id')
    }),

    throw: (state, action) => ({
      ...state,
      error: action.payload
    })
  }

}, initialState);
