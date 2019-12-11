import React from 'react';
import {TextInput, View, Text} from 'react-native';

const TexInput = ({label, value, onChangeText, placeholder, hidden}) => {
  const {inputStyle, labelStyle, contStyle} = styles;
  return (
    <View style={contStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={hidden}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
  },
  inputStyle: {
    color: 'black',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  contStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {TexInput};
