import { createAction, handleActions } from 'redux-actions';
import http from 'helpers/http';
import { stats } from 'pokemongo-data';

export const fetchConfig = createAction('@config/fetch', () => (dispatch) => {
  return http
    .get('/config')
    .finally(response => { response })
});

export const updateConfig = createAction('@config/update');

export const updated = createAction('@config/updated');

export const updateUIConfig = createAction('@config/updateUI', (key, value) => (dispatch) => {
  return http
      .patch('/config', {ui: { [key]: value } })
      .finally(() => dispatch(updated));
});

export const updateAppConfig = createAction('@config/updateApp', (key, value) => (dispatch) => {
  return http
      .patch('/config', { [key]: value })
      .finally(() => dispatch(updated));
});

export const updateAutoReleaseConfig = createAction('@config/updateAutoRelease', (key, value) => (dispatch) => {
  return http
      .patch('/config', {autoReleaseExceptions: { [key]: value } })
      .finally(() => dispatch(updated));
});

export const initialState = {
    ui: {},
    autoReleaseExceptions: {},
};

export const configReducer = handleActions({
  [fetchConfig]: (state, { payload }) => {
    return payload.data;
  },

  // TODO change this to updateConfig so it handles all cases, couldn't figure out how
  [updateAppConfig]: (state, { payload }) => {
    return payload.data;
  },

  // TODO change this to updateConfig so it handles all cases, couldn't figure out how
  [updateUIConfig]: (state, { payload }) => {
    return payload.data;
  },

  // TODO change this to updateConfig so it handles all cases, couldn't figure out how
  [updateAutoReleaseConfig]: (state, { payload }) => {
    return payload.data;
  },
}, initialState);
