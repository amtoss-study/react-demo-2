import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Visit } from '../../types';
import NameForm from '../../components/NameForm';
import VisitsList from './VisitsList';
import VisitDetails from './VisitDetails';

const Visits = ({ visits, setVisits }: {
    visits: Visit[],
    setVisits: (visits: Visit[]) => void
}) => {
    const match = useRouteMatch();
    const getVisit = (name: string): Visit => {
        const timestamp = Date.now();
        return ({
            id: timestamp,
            name,
            timestamp,
        });
    }
    return (
        <Switch>
            <Route path={`${match.path}/:visitId`}>
                <VisitDetails visits={visits} />
            </Route>
            <Route path={match.path}>
                <NameForm
                    onSubmit={({ name }) => {
                        setVisits([...visits, getVisit(name)]);
                    }}
                />
                <VisitsList
                    visits={visits}
                    removeVisit={id => {
                        setVisits(visits.filter(visit => visit.id !== id))
                    }}
                />
            </Route>
        </Switch>
    );
}

export default Visits;
