import React from 'react';

type NameFormValues = {
    name: string;
};

const NameForm = ({ onSubmit }: {
    onSubmit: (values: NameFormValues) => void
}) => {
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

export default NameForm;
