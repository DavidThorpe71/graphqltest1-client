import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name.value
      }
    }).then(({ data }) => {
      // this.props.refetch();
    }).catch((err) => {
      console.error(err);
    })
  };

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
  name: "createResolution",
  options: {
    refetchQueries: [
      'Resolutions'
    ]
  }
})(ResolutionForm);