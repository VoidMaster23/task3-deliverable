//imports

import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {updateEmpl, employCreate} from '../actions/EmployeeActions';
import {Card, Section, TexInput, Button} from './common';
import EmplForm from './EmplForm';

//declare the class
class EmployeeCreate extends Component {
  //buttonpress event
  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <EmplForm {...this.props} />
        <Section>
          <Button onPress={this.onButtonPress.bind(this)}>Add Employee</Button>
        </Section>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {updateEmpl, employCreate},
)(EmployeeCreate);
