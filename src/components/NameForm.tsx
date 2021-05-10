import React from "react";

export type Values = {
  name: string;
};

const NameForm = ({
  onSubmit,
  initialValues = { name: "" },
}: {
  onSubmit: (values: Values) => void;
  initialValues?: Values;
}) => {
  const [values, setValues] = React.useState(initialValues);
  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
        setValues({ name: "" });
      }}
    >
      <h3>What is your name?</h3>
      <input
        name="name"
        value={values.name}
        onChange={(event) => {
          setValues({ name: event.target.value });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
