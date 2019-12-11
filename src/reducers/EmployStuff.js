import {FETCH_SUCCESS} from '../actions/types';

const INITIAL = {};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
