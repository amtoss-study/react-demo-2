import React from 'react';

type Visit = {
    id: number;
    timestamp: number;
    name: string;
}

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

const VisitsList = ({ visits, removeVisit }: { visits: Visit[], removeVisit: (id: number) => void }) => {
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

type NameFormValues = {
    name: string;
};

const NameForm = ({ onSubmit }: { onSubmit: (values: NameFormValues) => void }) => {
    const [nameValue, setNameValue] = React.useState('');
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit({ name: nameValue });
                setNameValue('');
            }}
        >
            <h3>What is your name?</h3>
            <input
                name="name"
                value={nameValue}
                onChange={event => {
                    setNameValue(event.target.value)
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

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
