import { createContext, useState, FunctionComponent } from "react";

import { Visit } from "types";

type VisitsContextType = {
  visits: Visit[];
  setVisits: (visits: Visit[]) => void;
};

export const VisitsContext = createContext<VisitsContextType>({
  visits: [],
  setVisits: () => {},
});

export const VisitsContextProvider: FunctionComponent = ({ children }) => {
  const [visits, setVisits] = useState<Visit[]>([]);
  return (
    <VisitsContext.Provider value={{ visits, setVisits }}>
      {children}
    </VisitsContext.Provider>
  );
};
