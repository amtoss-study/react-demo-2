import React from 'react';
import { useParams } from 'react-router-dom';

import { Visit } from '../../types';

const VisitDetails = ({ visits }: { visits: Visit[] }) => {
    const { visitId } = useParams<{ visitId: string }>();
    const visit = visits.find(v => v.id.toString() === visitId);
    if (visit === undefined) {
        return <h3>Visit does not exist</h3>;
    }
    return (
        <div>
            <h3>Visit details</h3>
            <p>Timestamp: {new Date(visit.timestamp).toLocaleString()}</p>
            <p>Visitor name: {visit.name}</p>
        </div>
    );
}

export default VisitDetails;
