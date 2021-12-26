import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "api";
import { removeVisit } from "entities/Visits/slice";

import { getVisitsIds } from "./selectors";
import { deleteVisitSuccess, fetchVisitsSuccess, reset } from "./slice";

const useVisitDelete = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<null | string>(null);
  const visitsIds = useSelector(getVisitsIds);

  const onDelete = async (id: number) => {
    dispatch(deleteVisitSuccess(id));
    const response = await api.delete(`visits/${id}`);
    if (!response.ok) {
      dispatch(reset());
      dispatch(fetchVisitsSuccess(visitsIds));
      setError(`Error deleting visit ${id}. Status code: ${response.status}`);
    } else {
      removeVisit(id);
    }
  };

  return { onDelete, error };
};

export default useVisitDelete;
