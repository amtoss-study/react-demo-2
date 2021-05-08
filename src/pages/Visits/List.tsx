import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Visit } from 'types';
import VisitsList from 'components/VisitsList';
import NameForm from 'components/NameForm';

const List = ({ visits, setVisits }: {
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
        <div>
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
                getVisitUrl={id => `${match.url}/${id}`}
            />
        </div>
    )
}

export default List;
