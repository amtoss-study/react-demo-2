import { VisitsContext } from "VisitsContext";
import { useContext, useCallback } from "react";

import { Visit } from "types";
import api from "api";

const useVisits = () => {
  const { visits, setVisits } = useContext(VisitsContext);

  const getVisit = (id: number) => visits.find((v) => v.id === id);

  const retrieveVisits = useCallback(() => {
    setVisits([]);
    return api.get("visits").then((data: Visit[]) => {
      setVisits(data);
    });
  }, [setVisits]);

  const createVisit = (values: Omit<Visit, "id">) => {
    return api.post("visits", values).then((data: Visit) => {
      setVisits([...visits, data]);
    });
  };

  const retrieveVisit = useCallback(
    (id: number) => {
      return api.get(`visits/${id}`).then((data: Visit) => {
        setVisits([...visits, data]);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  const updateVisit = (id: number, values: Partial<Visit>) => {
    return api.patch(`visits/${id}`, values).then((data: Visit) => {
      setVisits(visits.map((v) => (v.id === id ? data : v)));
    });
  };

  const deleteVisit = (id: number) => {
    setVisits(visits.filter((v) => v.id !== id));
    return api.del(`visits/${id}`).catch((err) => {
      setVisits(visits);
      throw err;
    });
  };

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
