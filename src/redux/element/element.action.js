import ElementActionTypes from "./element.types";

//Reducer Actions
export const setElementsList = input => ({
    type: ElementActionTypes.SET_ELEMENTS,
    payload: input
});

//Saga Actions
export const setElementsBySaga = () => ({
    type: ElementActionTypes.SET_ELEMENTS_SAGA
});

export const addElementBySaga = input => ({
    type: ElementActionTypes.ADD_ELEMENT_SAGA,
    payload: input
});