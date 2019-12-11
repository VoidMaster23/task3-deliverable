import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View>
      <ActivityIndicator style={styles.spnStyle} size={size || 'large'} />
    </View>
  );
};

const styles = {
  spnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export {Spinner};
