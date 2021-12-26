import { useCallback } from "react";
import { useDispatch } from "react-redux";

import api from "api";
import { addVisits } from "entities/Visits/slice";

import { fetchVisitsSuccess } from "./slice";
import { Visit } from "entities/Visits/types";

type Values = Omit<Visit, "id">;

const useVisitCreate = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (values: Values) => {
      const response = await api.post<Visit>("visits", values);
      if (response.ok && response.data) {
        const data = response.data;
        dispatch(addVisits([data]));
        dispatch(fetchVisitsSuccess([data.id]));
      } else {
        throw new Error(
          `Failed to create visit. Status code: ${response.status}`
        );
      }
    },
    [dispatch]
  );
};

export default useVisitCreate;
