import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmplForm from './EmplForm';
import {updateEmpl, employSave, employDelete} from '../actions';
import {Card, Section, Button, QuestionModal} from './common';


class EmplEdit extends Component {
  //this state is what allows us to toggle the modal
  state = {showModal: false};
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employSave({name, phone, shift, uid: this.props.employee.uid});
  }

  UNSAFE_componentWillMount() {
    //here lodash is used for iterating through elements
    //in the employee model
    console.log(this.props);
    _.each(this.props.employee, (value, prop) => {
      //updating the reducer
      this.props.updateEmpl({prop, value});
    });
  }

  sendText() {
    const {name, phone, shift} = this.props;
    const mess = `Good day ${name}, this message serves as a reminder about your ${shift} shift. Enjoy your day further`;
    Communications.text(phone, mess);
  }
  //modal
  onAccept() {
    const {uid} = this.props.employee;
    console.log(uid);
    this.props.employDelete({uid});
  }

  onDecline() {
    this.setState({showModal: false});
  }
  //modal
  render() {
    return (
      <Card>
        <EmplForm />
        <Section>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </Section>

        <Section>
          <Button onPress={this.sendText.bind(this)}>
            Message {this.props.name}
          </Button>
        </Section>

        <Section>
          <Button
            onPress={() => this.setState({showModal: !this.state.showModal})}>
            Terminate employment
          </Button>
        </Section>

        <QuestionModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to terminate {this.props.name}
          {"'"}s employment?
        </QuestionModal>
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
  {updateEmpl, employSave, employDelete},
)(EmplEdit);
