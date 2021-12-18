import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export type Values = {
  name: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter a name")
    .min(2, "Please enter at least 2 characters"),
});

const NameForm = ({
  onSubmit,
  initialValues = { name: "" },
}: {
  onSubmit: (values: Values) => Promise<void>;
  initialValues?: Values;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
        try {
          await onSubmit(values);
          resetForm();
        } catch (err) {
          setFieldError("name", `Error while submitting the form: ${err}`);
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={schema}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <h3>What is your name?</h3>
          <Field name="name" />
          <ErrorMessage name="name" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NameForm;
