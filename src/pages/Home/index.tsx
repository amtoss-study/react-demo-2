import React from "react";

import useLastVisit from "./useLastVisit";

const Index = () => {
  const lastVisit = useLastVisit();
  return <h3>Hello, {lastVisit ? lastVisit.name : "Incognito"}</h3>;
};

export default Index;
