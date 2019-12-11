import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Section} from './common';
import {Actions} from 'react-native-router-flux';

//define the item
class ListItem extends Component {
  RowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }
  render() {
    const {name, phone} = this.props.employee;

    return (
      <TouchableOpacity onPress={this.RowPress.bind(this)}>
        <Section>
          <Text style={{flex: 2, fontSize: 18, paddingLeft: 15}}>{name}</Text>
          <Text style={{flex: 1, fontSize: 18, paddingLeft: 15}}>{phone}</Text>
        </Section>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
