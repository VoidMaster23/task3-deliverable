//import response types
import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

//declare an initial state
const INITIAL = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

// do different things depending on the action types
export default (state = INITIAL, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};

    case PASS_CHANGED:
      return {...state, pass: action.payload};

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL,
        user: action.payload,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        pass: '',
        loading: false,
      };

    case LOGIN_USER:
      return {...state, loading: true, error: ''};

    default:
      return state;
  }
};
