import React from 'react';

import { Visit } from '../types';

const VisitsListItem = ({ id, timestamp, name, removeVisit }: Visit & {
    removeVisit: (id: number) => void,
}) => (
    <li>
        <span style={{ marginRight: '20px' }}>
            {new Date(timestamp).toLocaleString()} | {name}
        </span>
        <button
            type="button"
            onClick={() => removeVisit(id)}
        >
            Remove
        </button>
    </li>
);

export default VisitsListItem;
