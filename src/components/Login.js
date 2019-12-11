//import statements
import React, {Component} from 'react';
import {Card, Section, TexInput, Button, Spinner} from './common';
import {emailChanged, passChanged, loginUser} from '../actions';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

//class definintion
class Login extends Component {
  //is called whenever you enter a character in the input
  onEChange(text) {
    this.props.emailChanged(text);
  }

  onPChange(text) {
    this.props.passChanged(text);
  }

  onBPress() {
    const {email, pass} = this.props;
    console.log(this.props.error);
    this.props.loginUser({email, pass});
  }

  //called when there is an error
  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.errorStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  //determines what shows up
  renderB() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onBPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        {/*This is for the email*/}
        <Section>
          <TexInput
            label="Email"
            placeholder="user123@gmail.com"
            onChangeText={this.onEChange.bind(this)}
            value={this.props.email}
          />
        </Section>

        {/*This is for the password*/}
        <Section>
          <TexInput
            secureTextEntry="true"
            label="Password"
            placeholder="password"
            onChangeText={this.onPChange.bind(this)}
            value={this.props.pass}
          />
        </Section>

        {/*Show an error */}
        {this.renderError()}

        {/*This is for the login button*/}
        <Section>{this.renderB()}</Section>
      </Card>
    );
  }
}

//styling
const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },

  viewStyle: {
    backgroundColor: 'white',
  },
};

//allows tou to send state as a prop
const mapStateToProps = state => {
  console.log(state.auth.error);
  return {
    email: state.auth.email,
    pass: state.auth.pass,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

//export statement
export default connect(
  mapStateToProps,
  {emailChanged, passChanged, loginUser},
)(Login);
