import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import { BirdsList, BirdsForm } from '../pages/Birds';
import { DietsList, DietsForm } from '../pages/Diets';
import { ConservationsList, ConservationsForm } from '../pages/Conservation';

const Routes: React.FC = () => {
  const birdsPath = '/birds';
  const dietsPath = '/diets';
  const conservationsPath = '/conservations';

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path={`${birdsPath}`} exact component={BirdsList} isPrivate />
      <Route path={`${birdsPath}/new`} component={BirdsForm} isPrivate />
      <Route path={`${birdsPath}/edit/:id`} component={BirdsForm} isPrivate />

      <Route path={`${dietsPath}`} exact component={DietsList} isPrivate />
      <Route path={`${dietsPath}/new`} component={DietsForm} isPrivate />
      <Route path={`${dietsPath}/edit/:id`} component={DietsForm} isPrivate />

      <Route
        path={`${conservationsPath}`}
        exact
        component={ConservationsList}
        isPrivate
      />
      <Route
        path={`${conservationsPath}/new`}
        component={ConservationsForm}
        isPrivate
      />
      <Route
        path={`${conservationsPath}/edit/:id`}
        component={ConservationsForm}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
