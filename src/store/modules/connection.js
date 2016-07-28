import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import http from 'helpers/http';
import keyBy from 'lodash/keyBy';
import sortBy from 'sort-by';

export const fetchAuthTicket = createAction('@connection/fetchAuthTicket', () => (dispatch) => {
  console.log('about to fetch ticket');
  return http
    .get('/authTicket')
    .finally(response => ({ response }));
});

export const initialState = {
  authTicket: null,
}

export const connectionReducer = handleActions({
  [fetchAuthTicket]: {
    next: (state, { payload }) => ({
      ...state,
      authTicket: payload.data,
    }),

    throw: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
}, initialState);
