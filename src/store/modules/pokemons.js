import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import http from 'helpers/http';
import keyBy from 'lodash/keyBy';
import sortBy from 'sort-by';
import omit from 'lodash/omit';
import { stats } from 'pokemongo-data';

export const loading = createAction('@pokemons/loading');
export const loaded = createAction('@pokemons/loaded');
export const fetchPokemons = createAction('@pokemons/fetch', () => (dispatch) => {
  dispatch(loading());
  return http
    .get('/pokemon')
    .then(payload => payload.data.filter(it => !it.is_egg))
    .finally(() => dispatch(loaded()));
});

export const evolve = createAction('@pokemons/evolve', (pokemon) => (dispatch) => {
  // TODO: add modal confirmation & action
});

export const powerup = createAction('@pokemons/powerup', (pokemon) => (dispatch) => {
  // TODO: add modal confirmation & action
});

export const release = createAction('@pokemons/release', (pokemon) => (dispatch) => {
  // TODO: add modal confirmation & action
  return http
    .post('/rpc/release', { id: pokemon.id })
    .return(pokemon);
});

export const switchLayout = createAction('@pokemons/switchLayout');
export const switchSort = createAction('@pokemons/switchSort');

//
// Selectors
// This is for efficient state change handling
//
export const errorSelector = state => state.pokemons.error && state.pokemons.error.message;
export const loadingSelector = state => state.pokemons.loading;
export const pokemonSelector = state => state.pokemons.order;
export const layoutSelector = state => state.pokemons.layout;
export const sortBySelector = state => state.pokemons.sortBy;

// sort function helper
export const sortCreator = (...args) => {
  const sort = sortBy(...args);
  return pokemons => pokemons ? pokemons.slice(0).sort(sort) : pokemons;
};

// sortBy selectors
export const sortSelectors = {
  recent: sortCreator('-creation_time_ms', '-stats.powerQuotient', '-cp'),
  favorite: sortCreator('-favorite', '-cp'),
  number: sortCreator('-stats.id', '-cp'),
  hp: sortCreator('-stamina_max', '-cp'),
  name: sortCreator('pokemon_id', '-stats.powerQuotient', '-cp'),
  cp: sortCreator('-cp', '-stats.powerQuotient')
};

export const sortSelector = createSelector(
  sortBySelector,
  pokemonSelector,
  (sortBy, order) => sortSelectors[sortBy](order)
);

export const initialState = {
  loading: false,
  error: null,
  pokemons: null,
  order: null,
  layout: 'wide',
  sortBy: 'recent'
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
      order: payload,
      pokemons: keyBy(payload, pokemon => {
        // mutate and add extra data
        // TODO: map current player level
        pokemon.stats = stats.calc(pokemon, 40);
        pokemon.picture = `pokemon/pkm${pokemon.stats.id}.png`;
        pokemon.creation_time_ms = +pokemon.creation_time_ms;

        return pokemon.id;
      })
    }),

    throw: (state, action) => ({
      ...state,
      error: action.payload
    })
  },

  [release]: {
    next: (state, { payload }) => ({
      ...state,
      error: null,
      pokemons: omit(state.pokemons, payload.id)
    }),

    throw: (state, action) => ({
      ...state,
      error: action.payload
    })
  },

  [switchLayout]: (state, { payload }) => ({
    ...state,
    layout: payload
  }),

  [switchSort]: (state, { payload }) => ({
    ...state,
    sortBy: payload
  })

}, initialState);
