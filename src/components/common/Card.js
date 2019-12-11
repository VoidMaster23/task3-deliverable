import React from 'react';
import {View} from 'react-native';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    overflow: 'hidden',
  },
};

export {Card};
