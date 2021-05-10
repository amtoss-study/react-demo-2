import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Details from "./Details";
import List from "./List";

const Visits = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:visitId`} component={Details} />
      <Route path={match.path} component={List} />
    </Switch>
  );
};

export default Visits;
