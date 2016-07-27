import { createAction, handleActions } from 'redux-actions';
import Promise from 'bluebird';

const initialState = {
  modalType: null,
  opened: false,
  hiding: false,
  modalProps: {}
};

export const open = createAction('@modal/open', (payload) => {
  toggleBodyScrolling(true);
  return payload;
});

export const hide = createAction('@modal/hide');

export const close = createAction('@modal/close', () => dispatch => {
  dispatch(hide());
  toggleBodyScrolling(false);
  return Promise.delay(500);
});

let originalBodyPosition = null;

function toggleBodyScrolling(on) {
  const body = document.getElementsByTagName('body')[0];
  if (on) {
    originalBodyPosition = body.style.position;
    body.style.position = 'fixed';
  } else {
    body.style.position = originalBodyPosition || '';
    originalBodyPosition = null;
  }
}

export const modalReducer = handleActions({
  [open]: (state, { payload }) => ({
    ...state,
    hiding: false,
    opened: true,
    modalType: payload.modalType,
    modalProps: payload.modalProps
  }),

  [hide]: (state) => ({
    ...state,
    hiding: true,
    opened: false
  }),

  [close]: (state) => {
    if (state.hiding) {
      return initialState;
    }

    return state;
  }

}, initialState);
