import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const login = gql`
  mutation login {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createResolution();
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>Password
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

// Name in the below defines the name in this.props, otherwise just called mutation
export default graphql(login, {
  name: "login"
})(LoginForm);