import React from "react";

import VisitDetails from "components/VisitDetails";
import NameForm from "components/NameForm";
import Spinner from "components/Spinner";
import useVisitDetails from "./useVisitDetails";
import useVisitEdit from "./useVisitEdit";

const Details = () => {
  const { visit, loading, error: fetchingError } = useVisitDetails();
  const { onEdit, edit, editing } = useVisitEdit();

  const visitExists = visit !== undefined;

  return (
    <>
      {!loading && !visitExists && <h3>Visit does not exist</h3>}

      {editing && visit !== undefined && (
        <NameForm onSubmit={onEdit} initialValues={{ name: visit.name }} />
      )}

      {!editing && visit !== undefined && (
        <div>
          <VisitDetails {...visit} />
          <button type="button" onClick={edit}>
            Edit
          </button>
        </div>
      )}

      {loading && <Spinner />}
      {fetchingError && <div style={{ color: "red" }}>{fetchingError}</div>}
    </>
  );
};

export default Details;
