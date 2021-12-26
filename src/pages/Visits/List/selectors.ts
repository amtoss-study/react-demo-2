import { State } from "store";

export const getVisitsListState = (state: State) => state.visitsList;

export const getVisitsIds = (state: State) =>
  getVisitsListState(state).visitsIds;
