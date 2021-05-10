import React from "react";
import { useParams } from "react-router-dom";

import VisitDetails from "components/VisitDetails";
import NameForm from "components/NameForm";
import useVisits from "hooks/useVisits";

const Details = () => {
  const { retrieveVisit, updateVisit } = useVisits();
  const { visitId } = useParams<{ visitId: string }>();
  const [editing, setEditing] = React.useState(false);

  const visit = retrieveVisit(parseInt(visitId, 10));
  if (visit === undefined) {
    return <h3>Visit does not exist</h3>;
  }

  if (!editing) {
    return (
      <div>
        <VisitDetails {...visit} />
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <NameForm
      onSubmit={(values) => {
        updateVisit(visit.id, values);
        setEditing(false);
      }}
      initialValues={{ name: visit.name }}
    />
  );
};

export default Details;
