import React from 'react';

import { Visit } from '../../types';
import NameForm from '../../components/NameForm';
import VisitsList from './VisitsList';

const Visits = ({ visits, setVisits }: {
    visits: Visit[],
    setVisits: (visits: Visit[]) => void
}) => {
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
            />
        </div>
    );
}

export default Visits;
