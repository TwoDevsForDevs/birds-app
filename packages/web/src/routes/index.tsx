import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
// import { BirdsList, BirdsForm } from '../pages/Birds';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      {/* <Route path="/birds" exact component={BirdsList} />
      <Route path="/birds/new" component={BirdsForm} />
      <Route path="/birds/edit/:id" component={BirdsForm} /> */}
    </Switch>
  );
};

export default Routes;
