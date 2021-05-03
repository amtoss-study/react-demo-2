import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Visit } from '../../types';

const VisitsListItem = ({ id, timestamp, name, removeVisit }: Visit & {
    removeVisit: (id: number) => void,
}) => {
    const match = useRouteMatch();
    return (
        <li>
            <Link to={`${match.url}/${id}`} style={{ marginRight: '20px' }}>
                {new Date(timestamp).toLocaleString()} | {name}
            </Link>
            <button
                type="button"
                onClick={() => removeVisit(id)}
            >
                Remove
            </button>
        </li>
    );
}

export default VisitsListItem;
