// class App extends React.Component {
//     render() {
//         return <p>Hello, {this.props.name}!</p>;
//     }
// }

// function App(props) {
//     return <p>Hello, {props.name}!</p>;
// }

// const App = props => {
//     return <p>Hello, {props.name}!</p>;
// }

// const App = props => <p>Hello, {props.name}!</p>;

// const App = ({ name }) => <p>Hello, {name}!</p>;

const getQueryParam = param => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const Greeting = ({ name }) => (
    <p>Hello, {name}!</p>
);

const NameForm = () => {
    return (
        <form autoComplete="off">
            <h3>What is your name?</h3>
            <input name="name" />
            <button type="submit">Submit</button>
        </form>
    );
}

const App = () => {
    return (
        <div>
            <NameForm />
            <Greeting name={getQueryParam('name') || 'Incognito'} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
