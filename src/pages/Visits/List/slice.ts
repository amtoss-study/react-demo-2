import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";

import { FETCH_VISITS } from "./constants";

export type State = {
  visitsIds: number[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  visitsIds: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "visitsList",
  initialState,
  reducers: {
    fetchVisitsAttempt: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchVisitsSuccess: (state, action: PayloadAction<number[]>) => {
      state.visitsIds.push(...action.payload);
      state.loading = false;
    },
    fetchVisitsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteVisitSuccess: (state, action: PayloadAction<number>) => {
      state.visitsIds = state.visitsIds.filter((id) => id !== action.payload);
    },
    reset: (state) => {
      state.visitsIds = [];
    },
  },
});

export const {
  fetchVisitsAttempt,
  fetchVisitsSuccess,
  fetchVisitsError,
  deleteVisitSuccess,
  reset,
} = slice.actions;

export const fetchVisits = (): Action => ({ type: FETCH_VISITS });

export const { reducer } = slice;
