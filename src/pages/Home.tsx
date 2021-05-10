import React from "react";

import useVisits from "hooks/useVisits";

const Home = () => {
  const { visits } = useVisits();
  const lastVisit = visits[visits.length - 1];
  return <h3>Hello, {lastVisit ? lastVisit.name : "Incognito"}</h3>;
};

export default Home;
