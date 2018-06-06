import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createUser = gql`
  mutation createUser {
    createUser {
      _id
    }
  }
`;

class NewUserForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    dob: '',
    height: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createResolution();
    this.setState({
      firstName: '',
      lastName: '',
      dob: '',
      height: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>Last Name
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>Date of birth
          <input type="text" name="dob" value={this.state.dob} onChange={this.handleChange} />
          </label>
          <label>Height
          <input type="text" name="height" value={this.state.height} onChange={this.handleChange} />
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