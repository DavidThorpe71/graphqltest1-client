import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './components/ResolutionForm';
import NewUserForm from './components/NewUserForm';
import './App.css';
import LoginForm from './components/LoginForm';

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <ResolutionForm />
      <NewUserForm />
      <LoginForm />
      <div className="resolutions-list">
        <h3>Resolutions</h3>
        {resolutions.map(resolution => (
          <p key={resolution._id}>{resolution.name}</p>
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
