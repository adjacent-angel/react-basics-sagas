//import the reducer to be added to combined reducers
import { combineReducers } from 'redux';
import{ addSubReducer } from './addSub/addSubReducer';
import { elementReducer } from './element/element.reducer';

export const rootReducer = combineReducers({
    addSubReducer,
    elementReducer
});