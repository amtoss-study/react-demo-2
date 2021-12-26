import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Visit } from "entities/Visits/types";
import api from "api";
import { addVisits } from "entities/Visits/slice";

const useVisitEdit = () => {
  const dispatch = useDispatch();
  const { visitId } = useParams<{ visitId: string }>();
  const id = parseInt(visitId, 10);
  const [editing, setEditing] = useState(false);

  const onEdit = useCallback(
    async (values: Partial<Visit>) => {
      const response = await api.patch<Visit>(`visits/${id}`, values);
      if (response.ok && response.data) {
        const data = response.data;
        dispatch(addVisits([data]));
      } else {
        throw new Error(
          `Failed to update visit. Status code: ${response.status}`
        );
      }
    },
    [dispatch, id]
  );

  const edit = useCallback(() => {
    setEditing(true);
  }, []);

  return { edit, editing, onEdit };
};

export default useVisitEdit;
