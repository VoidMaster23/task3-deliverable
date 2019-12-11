import React from 'react';
import {Text, View, Modal} from 'react-native';
//avoid cyclical dependencies
import {Section} from './Section';
import {Button} from './Button';

const QuestionModal = ({children, visible, onAccept, onDecline}) => {
    const {containerStyle, textStyle, sectionStyle} = styles;
    return (
        
    <Modal
      animationType="fade"
      onRequestClose={() => {}}
      transparent
      visible={visible}>
      <View style={containerStyle}>
        <Section style={sectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </Section>

        <Section>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </Section>
      </View>
    </Modal>
  );
};

const styles = {
  sectionStyle: {
    justifyContent: 'center',
  },

  textStyle: {flex: 1, textAlign: 'center', lineHeight: 40, color:'red'},

  containerStyle: {
    backgroundColor: 'rgba(0,0,0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};

export {QuestionModal};
