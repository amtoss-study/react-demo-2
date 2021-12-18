import useVisits from "hooks/useVisits";

const useVisitCreate = () => {
  const { createVisit } = useVisits();

  return { onCreate: createVisit };
};

export default useVisitCreate;
