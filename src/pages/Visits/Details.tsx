import React from 'react';
import { useParams } from 'react-router-dom';

import { Visit } from 'types';
import VisitDetails from 'components/VisitDetails';
import NameForm from 'components/NameForm';

const Details = ({ visits, setVisits }: {
    visits: Visit[],
    setVisits: (visits: Visit[]) => void
}) => {
    const { visitId } = useParams<{ visitId: string }>();
    const [editing, setEditing] = React.useState(false);

    const visit = visits.find(v => v.id.toString() === visitId);
    if (visit === undefined) {
        return <h3>Visit does not exist</h3>;
    }

    if (!editing) {
        return (
            <div>
                <VisitDetails {...visit} />
                <button type="button" onClick={() => setEditing(true)}>
                    Edit
                </button>
            </div>
        );
    }

    return (
        <NameForm
            onSubmit={values => {
                const updatedVisit = {...visit, ...values };
                setVisits(visits.map(v => v.id === updatedVisit.id ? updatedVisit : v));
                setEditing(false);
            }}
            initialValues={{ name: visit.name }}
        />
    );
};

export default Details;
