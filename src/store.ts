import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import {
  reducer as visitsEntitiesReducer,
  State as VisitsEntitiesState,
} from "entities/Visits/slice";
import {
  reducer as visitsListReducer,
  State as VisitsListState,
} from "pages/Visits/List/slice";
import visitsListSaga from "pages/Visits/List/saga";

const sagaMiddleware = createSagaMiddleware();

export type State = {
  visitsEntities: VisitsEntitiesState;
  visitsList: VisitsListState;
};

export default configureStore({
  reducer: {
    visitsEntities: visitsEntitiesReducer,
    visitsList: visitsListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(visitsListSaga);
