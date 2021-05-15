import React from "react";

export type Values = {
  name: string;
};

const NameForm = ({
  onSubmit,
  initialValues = { name: "" },
}: {
  onSubmit: (values: Values) => Promise<void>;
  initialValues?: Values;
}) => {
  const [values, setValues] = React.useState(initialValues);
  const [submitting, setSubmitting] = React.useState(false);
  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitting(true);
        onSubmit(values).then(() => {
          setSubmitting(false);
          setValues({ name: "" });
        });
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
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

export default NameForm;
