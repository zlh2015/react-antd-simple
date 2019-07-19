import { 
  _SIGN_IN_START, 
  _SIGN_IN_FINISH, 
  _SIGN_UP_START, 
  _SIGN_UP_FINISH, 
  _SIGN_OUT_START, 
  _SIGN_OUT_FINISH, 
  SIGN_IN, 
  SIGN_OUT, 
  SIGN_UP
 } from './actionTypes';

export const signInStart = (payload) => {
  return {
    type: _SIGN_IN_START,
    payload: payload
  };
}

export const signInFinish = (payload) => {
  return {
    type: _SIGN_IN_FINISH,
    payload: payload
  };
}

export const signUpStart = (payload) => {
  return {
    type: _SIGN_UP_START,
    payload: payload
  };
}

export const signUpFinish = (payload) => {
  return {
    type: _SIGN_UP_FINISH,
    payload: payload
  };
}

export const signOutStart = (payload) => {
  return {
    type: _SIGN_OUT_START,
    payload: payload
  };
}

export const signOutFinish = (payload) => {
  return {
    type: _SIGN_OUT_FINISH,
    payload: payload
  };
}

export const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload: payload
  };
}

export const signUp = (payload) => {
  return {
    type: SIGN_UP,
    payload: payload
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

