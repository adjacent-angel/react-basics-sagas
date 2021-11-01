//import action types object here
import AddSubActionTypes from "./addSub.types";

const INITIAL_STATE = { value: 0};

export const addSubReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //6
        case AddSubActionTypes.INCREMENT:
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}