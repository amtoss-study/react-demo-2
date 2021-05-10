import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "pages/Home";
import Visits from "pages/Visits";
import { VisitsContextProvider } from "VisitsContext";

const App = () => {
  return (
    <Router>
      <VisitsContextProvider>
        <NavBar />
        <Switch>
          <Route path="/visits" component={Visits} />
          <Route path="/" component={Home} />
        </Switch>
      </VisitsContextProvider>
    </Router>
  );
};

export default App;
