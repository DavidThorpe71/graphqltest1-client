import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const login = gql`
  query login {
    login {
      email
      password
    }
  }
`;

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  }

  handleClick = (e) => {

  }


  render() {
    return (
      <div>
        <h3>Logout Form</h3>
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    )
  }
}

// Name in the below defines the name in this.props, otherwise just called mutation
export default graphql(login, {
  name: "login"
})(LoginForm);