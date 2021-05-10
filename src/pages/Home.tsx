import React from "react";

const Home = ({ name }: { name?: string }) => (
  <h3>Hello, {name || "Incognito"}</h3>
);

export default Home;
