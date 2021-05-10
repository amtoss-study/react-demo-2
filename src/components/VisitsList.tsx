import React from "react";

import { Visit } from "types";
import VisitsListItem from "./VisitsListItem";

const VisitsList = ({
  visits,
  removeVisit,
  getVisitUrl,
}: {
  visits: Visit[];
  removeVisit: (id: number) => void;
  getVisitUrl: (id: number) => string;
}) => (
  <div>
    <h3>History of visits</h3>
    <ul>
      {visits.map((visit) => (
        <VisitsListItem
          key={visit.id}
          removeVisit={removeVisit}
          getVisitUrl={getVisitUrl}
          {...visit}
        />
      ))}
    </ul>
  </div>
);

export default VisitsList;
