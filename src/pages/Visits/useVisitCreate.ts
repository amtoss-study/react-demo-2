import React from "react";

import { Visit } from "types";
import useVisits from "hooks/useVisits";

const useVisitCreate = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | Error>(null);
  const { createVisit } = useVisits();

  const onCreate = React.useCallback(
    async (values: Omit<Visit, "id">) => {
      setLoading(true);
      setError(null);
      try {
        await createVisit(values);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [createVisit]
  );

  return { onCreate, loading, error };
};

export default useVisitCreate;
