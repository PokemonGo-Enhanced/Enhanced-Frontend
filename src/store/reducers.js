import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { pokemonsReducer as pokemons } from './modules/pokemons';
import { modalReducer as modal } from './modules/modal';
import { connectionReducer as connection } from './modules/connection';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    connection,
    modal,
    router,
    pokemons,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
