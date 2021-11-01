//import sagas effects for all to yield all the sagas
import { all } from "@redux-saga/core/effects";
//import sagas to monitor
import { addOrSubSaga } from "./addSub/addSub.sagas";
import { elementsSaga } from "./element/element.saga";
/**
 * rootSaga is the primary saga.
 * It bundles up all of the other sagas so our project can monitor them.
 * This is imported in the store.js as rootSaga
 */
export default function* rootSaga() {
    yield all([
        addOrSubSaga(),
        elementsSaga(),
    ])
}