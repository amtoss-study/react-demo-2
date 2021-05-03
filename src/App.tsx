import React from 'react';

import NameForm from './components/NameForm';
import VisitsList from './components/VisitsList';
import { Visit } from './types';

const App = () => {
    const [visits, setVisits] = React.useState<Visit[]>([]);
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

export default App;
