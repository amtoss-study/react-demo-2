import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Visits from './pages/Visits';
import { Visit } from './types';

const App = () => {
    const [visits, setVisits] = React.useState<Visit[]>([]);
    const lastVisit = visits[visits.length - 1];
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/visits">
                    <Visits visits={visits} setVisits={setVisits} />
                </Route>
                <Route path="/">
                    <Home name={lastVisit && lastVisit.name} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
