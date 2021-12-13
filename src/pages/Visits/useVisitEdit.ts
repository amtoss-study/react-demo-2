import React from "react";

import { Visit } from "types";
import useVisits from "hooks/useVisits";

const useVisitEdit = (id: number) => {
  const [error, setError] = React.useState<null | Error>(null);
  const [editing, setEditing] = React.useState(false);
  const { updateVisit } = useVisits();

  const onEdit = React.useCallback(
    async (values: Partial<Visit>) => {
      try {
        await updateVisit(id, values);
        setEditing(false);
      } catch (err) {
        setError(err);
      }
    },
    [id, updateVisit]
  );

  const edit = React.useCallback(() => {
    setEditing(true);
  }, []);

  return { edit, editing, onEdit, error };
};

export default useVisitEdit;
