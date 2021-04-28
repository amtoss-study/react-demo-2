const Visit = ({ id, timestamp, name, removeVisit }) => (
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

const Visits = ({ visits, removeVisit }) => {
    return (
        <div>
            <h3>History of visits</h3>
            <ul>
                {visits.map(visit => (
                    <Visit
                        key={visit.id}
                        removeVisit={removeVisit}
                        {...visit}
                    />
                ))}
            </ul>
        </div>
    )
}

const NameForm = ({ onSubmit }) => {
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
    const [visits, setVisits] = React.useState([]);
    const getVisit = name => {
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
            <Visits
                visits={visits}
                removeVisit={id => {
                    setVisits(visits.filter(visit => visit.id !== id))
                }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
