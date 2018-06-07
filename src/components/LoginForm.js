import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const login = gql`
  query login {
    login {
      userName
      password
    }
  }
`;

class LoginForm extends Component {

  state = {
    userName: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createResolution();
    this.setState({
      userName: '',
      password: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username
          <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
          </label>
          <label>Password
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>Confirm password
          <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

// Name in the below defines the name in this.props, otherwise just called mutation
export default graphql(login, {
  name: "login"
})(LoginForm);