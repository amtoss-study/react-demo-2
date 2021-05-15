import { VisitsContext } from "VisitsContext";
import { useContext, useCallback } from "react";

import { Visit } from "types";
import api from "api";

const useVisits = () => {
  const { visits, setVisits } = useContext(VisitsContext);

  const getVisit = (id: number) => visits.find((v) => v.id === id);

  const retrieveVisits = useCallback(async () => {
    setVisits([]);
    const data = await api.get<Visit[]>("visits");
    setVisits(data);
  }, [setVisits]);

  const createVisit = async (values: Omit<Visit, "id">) => {
    const data = await api.post<Visit>("visits", values);
    setVisits([...visits, data]);
  };

  const retrieveVisit = useCallback(
    async (id: number) => {
      const data = await api.get<Visit>(`visits/${id}`);
      setVisits([...visits, data]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setVisits]
  );

  const updateVisit = async (id: number, values: Partial<Visit>) => {
    const data = await api.patch<Visit>(`visits/${id}`, values);
    setVisits(visits.map((v) => (v.id === id ? data : v)));
  };

  const deleteVisit = async (id: number) => {
    setVisits(visits.filter((v) => v.id !== id));
    try {
      await api.del(`visits/${id}`);
    } catch (err) {
      setVisits(visits);
      throw err;
    }
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
