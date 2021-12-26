import React from "react";
import { Link } from "react-router-dom";

import { Visit } from "entities/Visits/types";

const VisitsListItem = ({
  id,
  timestamp,
  name,
  removeVisit,
  getVisitUrl,
}: Visit & {
  removeVisit: (id: number) => void;
  getVisitUrl: (id: number) => string;
}) => {
  return (
    <li>
      <Link to={getVisitUrl(id)} style={{ marginRight: "20px" }}>
        {new Date(timestamp).toLocaleString()} | {name}
      </Link>
      <button type="button" onClick={() => removeVisit(id)}>
        Remove
      </button>
    </li>
  );
};

export default VisitsListItem;
