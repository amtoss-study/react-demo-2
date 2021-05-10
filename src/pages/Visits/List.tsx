import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Visit } from "types";
import VisitsList from "components/VisitsList";
import NameForm, { Values as NameFormValues } from "components/NameForm";
import useVisits from "hooks/useVisits";

const createVisitFromValues = (values: NameFormValues): Omit<Visit, "id"> => {
  return {
    timestamp: Date.now(),
    ...values,
  };
};

const List = () => {
  const { visits, retrieveVisits, createVisit, deleteVisit } = useVisits();
  const match = useRouteMatch();

  React.useEffect(() => {
    retrieveVisits();
  }, [retrieveVisits]);

  return (
    <div>
      <NameForm
        onSubmit={(values) => {
          createVisit(createVisitFromValues(values));
        }}
      />
      <VisitsList
        visits={visits}
        removeVisit={deleteVisit}
        getVisitUrl={(id) => `${match.url}/${id}`}
      />
    </div>
  );
};

export default List;
