import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createUser = gql`
  mutation createUser($name: String!, $password: String!, $email: String!) {
    createUser(name: $name, password: $password, email: $email) {
      _id
    }
  }
`;

class NewUserForm extends Component {
  state = {
    name: '',
    password: '',
    confirmPassword: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, password, email } = this.state
    this.props.createUser({
      variables: {
        name,
        password,
        email
      }
    });
    // this.setState({
    //   name: '',
    //   password: '',
    //   confirmPassword: '',
    //   email: ''
    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>Email
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>Password
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>Confirm password
          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

// Name in the below defines the name in this.props, otherwise just called mutation
export default graphql(createUser, {
  name: "createUser"
})(NewUserForm);