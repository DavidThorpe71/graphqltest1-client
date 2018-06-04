import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => <h1>{data.hi}</h1>

const hiQuery = gql`
{
  hi
  users {
    _id
    name
  }
}
`;

export default graphql(
  hiQuery
)(App);
