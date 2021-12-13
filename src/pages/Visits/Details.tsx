import React from "react";
import { useParams } from "react-router-dom";

import VisitDetails from "components/VisitDetails";
import NameForm from "components/NameForm";
import Spinner from "components/Spinner";
import useVisitDetails from "./useVisitDetails";
import useVisitEdit from "pages/Visits/useVisitEdit";

const Details = () => {
  const { visitId } = useParams<{ visitId: string }>();
  const visitIdNum = parseInt(visitId, 10);

  const { visit, loading, error: fetchingError } = useVisitDetails(visitIdNum);
  const { edit, editing, onEdit, error: editError } = useVisitEdit(visitIdNum);

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
      {fetchingError && (
        <div style={{ color: "red" }}>
          Error while fetching visit: {`${fetchingError}`}
        </div>
      )}
      {editError && (
        <div style={{ color: "red" }}>
          Error while updating visit: {`${editError}`}
        </div>
      )}
    </>
  );
};

export default Details;
