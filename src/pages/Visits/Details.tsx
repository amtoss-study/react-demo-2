import React from "react";
import { useParams } from "react-router-dom";

import VisitDetails from "components/VisitDetails";
import NameForm from "components/NameForm";
import useVisits from "hooks/useVisits";
import Spinner from "components/Spinner";

const Details = () => {
  const { getVisit, retrieveVisit, updateVisit } = useVisits();
  const { visitId } = useParams<{ visitId: string }>();
  const [editing, setEditing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const visitIdNum = parseInt(visitId, 10);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    retrieveVisit(visitIdNum)
      .catch((err) => setError(`Error while loading visit: ${err}`))
      .finally(() => setLoading(false));
  }, [retrieveVisit, visitIdNum]);

  const visit = getVisit(visitIdNum);
  if (visit === undefined) {
    return <h3>Visit does not exist</h3>;
  }

  return (
    <>
      {editing && (
        <NameForm
          onSubmit={(values) => {
            return updateVisit(visit.id, values)
              .then(() => {
                setEditing(false);
              })
              .catch((err) => setError(`Error while updating visit: ${err}`))
              .finally(() => setEditing(false));
          }}
          initialValues={{ name: visit.name }}
        />
      )}

      {!editing && (
        <div>
          <VisitDetails {...visit} />
          <button type="button" onClick={() => setEditing(true)}>
            Edit
          </button>
        </div>
      )}

      {loading && <Spinner />}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export default Details;
