import { takeLatest, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { ApiResponse } from "apisauce";
import { prop } from "ramda";

import api from "api";
import { Visit } from "entities/Visits/types";
import { addVisits } from "entities/Visits/slice";

import {
  fetchVisitsAttempt,
  fetchVisitsSuccess,
  fetchVisitsError,
  reset,
} from "./slice";
import { FETCH_VISITS } from "./constants";

function* fetchVisits(): SagaIterator {
  yield put(reset());
  yield put(fetchVisitsAttempt());
  const response: ApiResponse<Visit[]> = yield call(api.get, "visits");
  if (response.ok && response.data) {
    const visits = response.data;
    yield put(addVisits(visits));
    yield put(fetchVisitsSuccess(visits.map(prop("id"))));
  } else {
    yield put(
      fetchVisitsError(
        `Error while fetching visits. Status code: ${response.status}`
      )
    );
  }
}

export default function* saga() {
  yield takeLatest(FETCH_VISITS, fetchVisits);
}
