import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  submitForm = () => {
    console.log(this.name.value);
    this.props.createResolution();
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

// Name in the below defines the name in this.props, otherwise just called mutation
export default graphql(createResolution, {
  name: "createResolution"
})(ResolutionForm);