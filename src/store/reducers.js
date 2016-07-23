import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { pokemonsReducer as pokemons } from './modules/pokemons';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
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
