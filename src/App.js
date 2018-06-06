import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './components/ResolutionForm';
import NewUserForm from './components/NewUserForm';
import './App.css';

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <ResolutionForm />
      <NewUserForm />
      <div className="resolutions-list">
        {resolutions.map(resolution => (
          <h3 key={resolution._id}>{resolution.name}</h3>
        )
        )}
      </div>
    </div>
  )
}

const resolutionsQuery = gql`
query Resolutions {
  resolutions {
    _id
    name
  }
}
`;

export default graphql(
  resolutionsQuery, {
    props: ({ data }) => ({ ...data })
  }
)(App);
