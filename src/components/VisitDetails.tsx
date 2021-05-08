import React from 'react';

import { Visit } from 'types';

const VisitDetails = ({ name, timestamp }: Visit) => (
    <div>
        <h3>Visit details</h3>
        <p>Timestamp: {new Date(timestamp).toLocaleString()}</p>
        <p>Visitor name: {name}</p>
    </div>
);

export default VisitDetails;
