import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Visit } from "./types";

export type State = Record<number, Visit>;

const initialState: State = {};

const slice = createSlice({
  name: "visits",
  initialState,
  reducers: {
    addVisits: (state, action: PayloadAction<Visit[]>) => {
      action.payload.forEach((visit) => {
        state[visit.id] = visit;
      }, state);
    },
    removeVisit: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const { addVisits, removeVisit } = slice.actions;

export const { reducer } = slice;
