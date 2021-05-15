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
  const visit = getVisit(visitIdNum);
  const visitExists = visit !== undefined;

  const fetchVisit = React.useCallback(
    async (id: number) => {
      if (visitExists) {
        return;
      }
      setLoading(true);
      setError(null);
      try {
        await retrieveVisit(id);
      } catch (err) {
        setError(`Error while loading visit: ${err}`);
      } finally {
        setLoading(false);
      }
    },
    [retrieveVisit, visitExists]
  );

  React.useEffect(() => {
    fetchVisit(visitIdNum);
  }, [fetchVisit, visitIdNum]);

  return (
    <>
      {!loading && !visitExists && <h3>Visit does not exist</h3>}

      {editing && visit !== undefined && (
        <NameForm
          onSubmit={async (values) => {
            try {
              await updateVisit(visit.id, values);
              setEditing(false);
            } catch (err) {
              setError(`Error while updating visit: ${err}`);
            } finally {
              setLoading(false);
            }
          }}
          initialValues={{ name: visit.name }}
        />
      )}

      {!editing && visit !== undefined && (
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
