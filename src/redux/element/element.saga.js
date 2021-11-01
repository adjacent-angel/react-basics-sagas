import { takeEvery, put } from "@redux-saga/core/effects";
import ElementActionTypes from "./element.types";
import { setElementsList, setElementsBySaga } from "./element.action";

function* getElementsSaga() {
    try {
        yield console.log('getElementsSaga');
        //request to the backend that will get a response
        const response = yield fetch('/api/element').then(res => res.json());
        //send information to the element reducer
        yield put(setElementsList(response));
    } catch(error) {
        console.log('error', error);
    } finally {
        console.log('finially runs no matter pass or fail!');
    }
}

function* postElementSaga(action) {
    try {
        if(action.payload.element !== '') {
            yield console.log('postElementSaga');
            yield fetch('/api/element', {
                method: "POST",
                headers: {
                    'ACCEPT': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
            //refresh dom by requesting info from the backend
            yield put(setElementsBySaga());
        }
    } catch(error) {
        console.log('error', error);
    }
}

export function* elementsSaga() {
    yield takeEvery(ElementActionTypes.SET_ELEMENTS_SAGA, getElementsSaga);
    yield takeEvery(ElementActionTypes.ADD_ELEMENT_SAGA, postElementSaga);
}