//this is the header component
//import libs
import React from 'react';
import {Text, View} from 'react-native';

//make the component
const Header = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//style stuff
const styles = {
  viewStyle: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 30},
    shadowOpacity: 1,
    elevation: 4,
    position: 'relative',
  },

  textStyle: {
    fontSize: 20,
  },
};

//make available to the rest od the app
export {Header};
