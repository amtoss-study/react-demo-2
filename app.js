const Greeting = ({ name }) => (
    <p>Hello, {name}!</p>
);

const NameForm = ({ onSubmit }) => {
    const [nameValue, setNameValue] = React.useState('');
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit({ name: nameValue })
            }}
        >
            <h3>What is your name?</h3>
            <p>Current value: {nameValue}</p>
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
    const [name, setName] = React.useState(null);
    return (
        <div>
            <NameForm onSubmit={values => setName(values.name)} />
            <Greeting name={name || 'Incognito'} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
