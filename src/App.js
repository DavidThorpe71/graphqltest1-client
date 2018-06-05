import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      {data.resolutions.map(resolution => (
        <h3 key={resolution._id}>{resolution.name}</h3>
      )
      )}
    </div>
  )
}

const hiQuery = gql`
{
  resolutions {
    _id
    name
  }
}
`;

export default graphql(
  hiQuery
)(App);
