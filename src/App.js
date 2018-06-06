import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './components/ResolutionForm';
import NewUserForm from './components/NewUserForm';
import './App.css';

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <ResolutionForm refetch={data.refetch} />
      <NewUserForm />
      <div className="resolutions-list">
        {data.resolutions.map(resolution => (
          <h3 key={resolution._id}>{resolution.name}</h3>
        )
        )}
      </div>
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
