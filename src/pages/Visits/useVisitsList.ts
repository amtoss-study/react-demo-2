import React, { useCallback } from "react";

import useVisits from "hooks/useVisits";

const useVisitsList = () => {
  const { visits, retrieveVisits } = useVisits();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | Error>(null);

  const fetchVisits = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await retrieveVisits();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [retrieveVisits]);

  React.useEffect(() => {
    fetchVisits();
  }, [fetchVisits]);

  return { visits, loading, error };
};

export default useVisitsList;
