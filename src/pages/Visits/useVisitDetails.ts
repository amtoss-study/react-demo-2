import React from "react";

import useVisits from "hooks/useVisits";

const useVisitsDetails = (id: number) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | Error>(null);

  const { getVisit, retrieveVisit } = useVisits();

  const visit = getVisit(id);
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
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [retrieveVisit, visitExists]
  );

  React.useEffect(() => {
    fetchVisit(id);
  }, [fetchVisit, id]);

  return { loading, error, visit };
};

export default useVisitsDetails;
