import { VisitsContext } from "VisitsContext";
import { useContext, useCallback } from "react";

import { Visit } from "types";
import api from "api";

const useVisits = () => {
  const { visits, setVisits } = useContext(VisitsContext);

  const getVisit = (id: number) => visits.find((v) => v.id === id);

  const retrieveVisits = useCallback(async () => {
    setVisits([]);
    const response = await api.get<Visit[]>("visits");
    if (response.ok && response.data) {
      setVisits(response.data);
    }
  }, [setVisits]);

  const createVisit = useCallback(
    async (values: Omit<Visit, "id">) => {
      const response = await api.post<Visit>("visits", values);
      if (response.ok && response.data) {
        const data = response.data;
        setVisits((prevVisits) => [...prevVisits, data]);
      }
    },
    [setVisits]
  );

  const retrieveVisit = useCallback(
    async (id: number) => {
      const response = await api.get<Visit>(`visits/${id}`);
      if (response.ok && response.data) {
        const data = response.data;
        setVisits((prevVisits) => {
          const index = prevVisits.findIndex((v: Visit) => v.id === id);
          if (index > -1) {
            // replace item at index
            return [
              ...prevVisits.slice(0, index),
              data,
              ...prevVisits.slice(index + 1),
            ];
          }
          return [...prevVisits, data];
        });
      }
    },
    [setVisits]
  );

  const updateVisit = useCallback(
    async (id: number, values: Partial<Visit>) => {
      const response = await api.patch<Visit>(`visits/${id}`, values);
      if (response.ok && response.data) {
        const data = response.data;
        setVisits((prevVisits) =>
          prevVisits.map((v) => (v.id === id ? data : v))
        );
      }
    },
    [setVisits]
  );

  const deleteVisit = async (id: number) => {
    setVisits(visits.filter((v) => v.id !== id));
    try {
      await api.delete(`visits/${id}`);
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
