import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Visit } from "types";

import Details from "./Details";
import List from "./List";

const Visits = ({
  visits,
  setVisits,
}: {
  visits: Visit[];
  setVisits: (visits: Visit[]) => void;
}) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:visitId`}>
        <Details visits={visits} setVisits={setVisits} />
      </Route>
      <Route path={match.path}>
        <List visits={visits} setVisits={setVisits} />
      </Route>
    </Switch>
  );
};

export default Visits;
