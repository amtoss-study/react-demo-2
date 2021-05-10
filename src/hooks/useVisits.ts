import { VisitsContext } from "VisitsContext";
import { useContext } from "react";

import { Visit } from "types";

const useVisits = () => {
  const { visits, setVisits } = useContext(VisitsContext);

  const createVisit = (values: Visit) => {
    setVisits([...visits, values]);
  };

  const retrieveVisit = (id: number) => visits.find((v) => v.id === id);

  const updateVisit = (id: number, values: Partial<Visit>) => {
    setVisits(visits.map((v) => (v.id === id ? { ...v, ...values } : v)));
  };

  const deleteVisit = (id: number) => {
    setVisits(visits.filter((v) => v.id !== id));
  };

  return { visits, createVisit, retrieveVisit, updateVisit, deleteVisit };
};

export default useVisits;
