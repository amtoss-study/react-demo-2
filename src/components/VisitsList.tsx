import React from 'react';

import { Visit } from '../types';
import VisitsListItem from './VisitsListItem';

const VisitsList = ({ visits, removeVisit }: {
    visits: Visit[],
    removeVisit: (id: number) => void
}) => {
    return (
        <div>
            <h3>History of visits</h3>
            <ul>
                {visits.map(visit => (
                    <VisitsListItem
                        key={visit.id}
                        removeVisit={removeVisit}
                        {...visit}
                    />
                ))}
            </ul>
        </div>
    )
}

export default VisitsList;
