import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import { BirdsList } from '../pages/Birds';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/birds" exact component={BirdsList} isPrivate />
    </Switch>
  );
};

export default Routes;
