import { State } from "store";
import { notUndefined } from "predicates";

import { Visit } from "./types";

export const getVisitById = (state: State, id: number): Visit | undefined =>
  state.visitsEntities[id];

export const getVisitsByIds = (state: State, ids: number[]): Visit[] => {
  return ids.map((id) => state.visitsEntities[id]).filter(notUndefined);
};
