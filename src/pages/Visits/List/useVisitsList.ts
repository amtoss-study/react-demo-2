import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVisitsByIds } from "entities/Visits/selectors";
import { State } from "store";

import { fetchVisits } from "./slice";
import { getVisitsListState } from "./selectors";

const useVisitsList = () => {
  const dispatch = useDispatch();
  const { visitsIds, loading, error } = useSelector(getVisitsListState);
  const visits = useSelector((state: State) =>
    getVisitsByIds(state, visitsIds)
  );

  useEffect(() => {
    dispatch(fetchVisits());
  }, [dispatch]);

  return { visits, loading, error };
};

export default useVisitsList;
