import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Visit } from "types";
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
  const {
    onCreate,
    loading: createLoading,
    error: createError,
  } = useVisitCreate();
  const { onDelete, error: deleteError } = useVisitDelete();

  return (
    <div>
      <NameForm
        onSubmit={async (values) => {
          onCreate(createVisitFromValues(values));
        }}
      />
      <VisitsList
        visits={visits}
        removeVisit={onDelete}
        getVisitUrl={(id) => `${match.url}/${id}`}
      />
      {(loading || createLoading) && <Spinner />}
      {fetchError && (
        <div style={{ color: "red" }}>
          Error while loading visits: {`${fetchError}`}
        </div>
      )}
      {createError && (
        <div style={{ color: "red" }}>
          Error while creating visit: {`${createError}`}
        </div>
      )}
      {deleteError && (
        <div style={{ color: "red" }}>
          Error while deleting visit: {`${deleteError}`}
        </div>
      )}
    </div>
  );
};

export default List;
