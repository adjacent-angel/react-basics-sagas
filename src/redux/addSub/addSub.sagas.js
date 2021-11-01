//import saga effects takeEvery, put
import { takeEvery, put } from "@redux-saga/core/effects";

//import action.types object from addSub.types.js
import AddSubActionTypes from "./addSub.types";

//import actions
import { addToReducer } from "./addSub.actions";

//create generate function for addSaga
//4
function* addSaga() {
    try{
        yield console.log('addSaga');
        //5
        yield put(addToReducer());
    } catch(error) {
        console.log('error', error);
    } finally {
        console.log('finially always runs pass or fail');
    }
}

//create generate function for subSaga

//create top generate function to monitor all sagas from the addSub files
//3
export function* addOrSubSaga() {
    yield takeEvery(AddSubActionTypes.INCREMENT_SAGA, addSaga);
}