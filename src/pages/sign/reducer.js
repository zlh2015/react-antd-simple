import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import * as ReducerBuilder from '../../utils/reducerBuilder';

const signInReducer = ReducerBuilder.requestReducer(ActionTypes._SIGN_IN_START, ActionTypes._SIGN_IN_FINISH); 
const signUpReducer = ReducerBuilder.requestReducer(ActionTypes._SIGN_UP_START, ActionTypes._SIGN_UP_FINISH); 
const signOutReducer = ReducerBuilder.requestReducer(ActionTypes._SIGN_OUT_START, ActionTypes._SIGN_OUT_FINISH); 

const signReducer = combineReducers({ 
    signining: signInReducer,
    signuping: signUpReducer,
    signOuting: signOutReducer,
});

export default signReducer;