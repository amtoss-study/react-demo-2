import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import api from "api";
import { State } from "store";
import { getVisitById } from "entities/Visits/selectors";
import { Visit } from "entities/Visits/types";
import { addVisits } from "entities/Visits/slice";

const useVisitsDetails = () => {
  const dispatch = useDispatch();
  const { visitId } = useParams<{ visitId: string }>();
  const id = parseInt(visitId, 10);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const visit = useSelector((state: State) => getVisitById(state, id));

  const fetchVisit = useCallback(
    async (id: number) => {
      setLoading(true);
      const response = await api.get<Visit>(`visits/${id}`);
      if (response.ok && response.data) {
        const data = response.data;
        dispatch(addVisits([data]));
      } else {
        setError(`Error while fetching visit. Status code: ${response.status}`);
      }
      setLoading(false);
    },
    [dispatch]
  );

  React.useEffect(() => {
    fetchVisit(id);
  }, [fetchVisit, id]);

  return { loading, error, visit };
};

export default useVisitsDetails;
