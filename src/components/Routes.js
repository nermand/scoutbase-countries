import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path="/countries/:code" component={CountryDetails} />
      <Route exact path="/countries/" component={Countries} />
    </Switch>
  );
};

export default Routes;
