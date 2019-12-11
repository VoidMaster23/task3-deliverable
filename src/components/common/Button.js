import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  const {btnStyle, txtStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'royalblue',
    marginLeft: 10,
    marginRight: 10,
  },

  txtStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
  },
};

export {Button};
