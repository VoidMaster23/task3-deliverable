import {
  UPDATE_EMPLOYEE,
  EMPLOYEE_CREATED,
  FETCH_SUCCESS,
  EMPLOYEE_SAVED,
} from './types';

import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const updateEmpl = ({prop, value}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {prop, value},
  };
};

export const employCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();
  //upload to  the db
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATED});
        Actions.emplList({type: 'reset'});
      });
  };
};

export const employFetch = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({type: FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const employSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVED});
        Actions.emplList({type: 'reset'});
      });
  };
};

//remember that these all ake OBJECTS and not
//just a variable
export const employDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  console.log(`UID: ${uid}`);

  return () => {

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.emplList({type: 'reset'});
      });
  };
};
