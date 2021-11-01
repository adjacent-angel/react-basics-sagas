import ElementActionTypes from "./element.types";
const INITIAL_STATE = [];

export const elementReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ElementActionTypes.SET_ELEMENTS:
            return action.payload;
        default:
            return state;
    }
};