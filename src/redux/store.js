import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlwareList = [sagaMiddleware, logger];

export const storeInstance = createStore(
    rootReducer, applyMiddleware(...middlwareList)
);

sagaMiddleware.run(rootSaga);