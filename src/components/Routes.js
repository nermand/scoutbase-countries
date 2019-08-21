import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Countries from './Countries';
import CountryDetails from './CountryDetails';
import Home from './Home';

const Container = styled.div`
  width: 70%
  background-color: #222;
  margin: 0 200px;
  padding: 20px;
  color: white;

@media (max-width: 768px) {
  width: auto;
  margin: 0 20px;
}
`;

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route path="/countries/:code" component={CountryDetails} />
        <Route exact path="/countries/" component={Countries} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  );
};

export default Routes;
