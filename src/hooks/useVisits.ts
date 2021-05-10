import { VisitsContext } from "VisitsContext";
import { useContext, useCallback } from "react";

import { Visit } from "types";
import api from "api";

const useVisits = () => {
  const { visits, setVisits } = useContext(VisitsContext);

  const getVisit = (id: number) => visits.find((v) => v.id === id);

  const retrieveVisits = useCallback(() => {
    api.get("visits").then((data: Visit[]) => {
      setVisits(data);
    });
  }, [setVisits]);

  const createVisit = useCallback(
    (values: Omit<Visit, "id">) => {
      api.post("visits", values).then((data: Visit) => {
        setVisits([...visits, data]);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  const retrieveVisit = useCallback(
    (id: number) => {
      api.get(`visits/${id}`).then((data: Visit) => {
        setVisits([...visits, data]);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  const updateVisit = useCallback(
    (id: number, values: Partial<Visit>) => {
      api.patch(`visits/${id}`, values).then((data: Visit) => {
        setVisits(visits.map((v) => (v.id === id ? data : v)));
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  const deleteVisit = useCallback(
    (id: number) => {
      api.del(`visits/${id}`).then(() => {
        setVisits(visits.filter((v) => v.id !== id));
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  return {
    visits,
    getVisit,
    retrieveVisits,
    createVisit,
    retrieveVisit,
    updateVisit,
    deleteVisit,
  };
};

export default useVisits;
