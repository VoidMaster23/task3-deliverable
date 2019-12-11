import React from 'react';
import {View} from 'react-native';

const Section = props => {
  //style to the right overwrites the one on the left
  return <View style={[styles.containerStyle,props.style]}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'black',
    position: 'relative',
  },
};

export {Section};
