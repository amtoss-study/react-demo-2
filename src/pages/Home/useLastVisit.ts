import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "api";
import { Visit } from "entities/Visits/types";
import { State } from "store";
import { getVisitById } from "entities/Visits/selectors";
import { addVisits } from "entities/Visits/slice";

const useLastVisit = (): Visit | undefined => {
  const dispatch = useDispatch();
  const [visitId, setVisitId] = useState<number>();
  const visit = useSelector((state: State) =>
    visitId ? getVisitById(state, visitId) : undefined
  );

  const fetchLastVisit = useCallback(async () => {
    // fetch one most recently added visit
    const response = await api.get<Visit[]>("visits", {
      _sort: "timestamp",
      _order: "desc",
      _limit: 1,
    });
    if (response.ok && response.data && response.data.length) {
      dispatch(addVisits(response.data));
      setVisitId(response.data[0].id);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchLastVisit();
  }, [fetchLastVisit]);

  return visit;
};

export default useLastVisit;
