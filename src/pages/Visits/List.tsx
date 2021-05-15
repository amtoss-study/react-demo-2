import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Visit } from "types";
import VisitsList from "components/VisitsList";
import NameForm, { Values as NameFormValues } from "components/NameForm";
import useVisits from "hooks/useVisits";
import Spinner from "components/Spinner";

const createVisitFromValues = (values: NameFormValues): Omit<Visit, "id"> => {
  return {
    timestamp: Date.now(),
    ...values,
  };
};

const List = () => {
  const { visits, retrieveVisits, createVisit, deleteVisit } = useVisits();
  const match = useRouteMatch();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    retrieveVisits()
      .catch((err) => setError(`Error while loading visits: ${err}`))
      .finally(() => setLoading(false));
  }, [retrieveVisits]);

  const removeVisit = (id: number) => {
    deleteVisit(id).catch((err) =>
      setError(`Error while deleting visit: ${err}`)
    );
  };

  return (
    <div>
      <NameForm
        onSubmit={(values) => {
          setLoading(true);
          setError(null);
          return createVisit(createVisitFromValues(values))
            .catch((err) => setError(`Error while creating visit: ${err}`))
            .finally(() => setLoading(false));
        }}
      />
      <VisitsList
        visits={visits}
        removeVisit={removeVisit}
        getVisitUrl={(id) => `${match.url}/${id}`}
      />
      {loading && <Spinner />}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default List;
