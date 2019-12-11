//import different types
import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export const emailChanged = text => {
  // action creator that handles user entering text into email
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passChanged = text => {
  // action creator that handles user entering text into password
  return {
    type: PASS_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, pass}) => {
  //handles ansync api calls
  return dispatch => {
    dispatch({type: LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => {
        //console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginFail(dispatch));
      });
  };
};

//handles the login
//called when successfully signed up or logged in
const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};

//called when unable to log in
const loginFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};
