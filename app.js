const Greeting = ({ name }) => (
    <p>Hello, {name}!</p>
);

const NameForm = ({ onSubmit }) => {
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit({ name: event.target[0].value })
            }}
        >
            <h3>What is your name?</h3>
            <input name="name" />
            <button type="submit">Submit</button>
        </form>
    );
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: null,
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <NameForm onSubmit={values => this.setState(values)} />
//                 <Greeting name={this.state.name || 'Incognito'} />
//             </div>
//         );
//     }
// }

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
