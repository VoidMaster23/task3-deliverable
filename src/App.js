//handles all imports
import React, {Component} from 'react';
//import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
//import Login from './components/Login';
import RouterComp from './Router';

class App extends Component {
  //this just sets up firebase
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyC8gKzgpERagTugA-FwmxI2IXlt-EYrRAc",
      authDomain: "management-system-40b36.firebaseapp.com",
      databaseURL: "https://management-system-40b36.firebaseio.com",
      projectId: "management-system-40b36",
      storageBucket: "management-system-40b36.appspot.com",
      messagingSenderId: "225919157134",
      appId: "1:225919157134:web:0c246a286640f13a2d9adf",
      measurementId: "G-F65Q18QVRC"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  //displays all components that need to be displayed
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComp />
      </Provider>
    );
  }
}

export default App;
