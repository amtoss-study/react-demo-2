import React from "react";

import useVisits from "hooks/useVisits";

const useVisitDelete = () => {
  const [error, setError] = React.useState<null | Error>(null);
  const { deleteVisit } = useVisits();

  const onDelete = async (id: number) => {
    try {
      await deleteVisit(id);
    } catch (err) {
      setError(err);
    }
  };

  return { onDelete, error };
};

export default useVisitDelete;
