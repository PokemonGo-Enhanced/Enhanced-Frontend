import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { pokemonsReducer as pokemons } from './modules/pokemons';
import { modalReducer as modal } from './modules/modal';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
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
