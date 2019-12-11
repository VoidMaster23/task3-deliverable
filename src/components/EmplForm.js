import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Section, TexInput} from './common';
import {connect} from 'react-redux';
import {updateEmpl} from '../actions';

class EmplForm extends Component {
  render() {
    return (
      <View>
        {/*for the name*/}
        <Section>
          <TexInput
            label="Name"
            placeholder="Harry Houdini"
            value={this.props.name}
            onChangeText={text =>
              this.props.updateEmpl({prop: 'name', value: text})
            }
          />
        </Section>

        {/*for the number*/}
        <Section>
          <TexInput
            label="Phone"
            placeholder="021 903 4578"
            value={this.props.phone}
            onChangeText={text =>
              this.props.updateEmpl({prop: 'phone', value: text})
            }
          />
        </Section>

        {/*for the spinner*/}
        <Section style={{flexDirection: 'column'}}>
          <Text style={styles.textStyle}>Select a Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.updateEmpl({prop: 'shift', value})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </Section>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 10,
  },
};

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {updateEmpl},
)(EmplForm);
