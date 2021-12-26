import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "components/NavBar";
import Home from "pages/Home";
import Visits from "pages/Visits";
import store from "store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/visits" component={Visits} />
          <Route path="/" component={Home} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
