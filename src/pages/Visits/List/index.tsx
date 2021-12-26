import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Visit } from "entities/Visits/types";
import VisitsList from "components/VisitsList";
import NameForm, { Values as NameFormValues } from "components/NameForm";
import Spinner from "components/Spinner";

import useVisitsList from "./useVisitsList";
import useVisitCreate from "./useVisitCreate";
import useVisitDelete from "./useVisitDelete";

const createVisitFromValues = (values: NameFormValues): Omit<Visit, "id"> => {
  return {
    timestamp: Date.now(),
    ...values,
  };
};

const List = () => {
  const match = useRouteMatch();

  const { visits, loading, error: fetchError } = useVisitsList();
  const onCreate = useVisitCreate();
  const { onDelete, error: deleteError } = useVisitDelete();

  return (
    <div>
      <NameForm
        onSubmit={async (values) => {
          await onCreate(createVisitFromValues(values));
        }}
      />
      <VisitsList
        visits={visits}
        removeVisit={onDelete}
        getVisitUrl={(id) => `${match.url}/${id}`}
      />
      {loading && <Spinner />}
      {fetchError && <div style={{ color: "red" }}>{fetchError}</div>}
      {deleteError && <div style={{ color: "red" }}>{deleteError}</div>}
    </div>
  );
};

export default List;
