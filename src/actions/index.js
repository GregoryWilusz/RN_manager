import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,  // very strong link between action and the reducer.
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// New Action Creator we expected to be called with an object with an email and pass props. Its job is to authenticate

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
            // In redux thunk, action creator returns a function.
            // after the request is complete we create our action ({ type...}) and manually pass it off to dispatch
            // the action here
                .catch( (error) => {
                    console.log(error);
                    firebase.auth().createUserWithEmailAndPassword(email, password) // first we call firebase.auth()
                        .then( user => loginUserSuccess(dispatch, user))
                        .catch( () => loginUserFail(dispatch))
        });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

// we don't want to export this helper method, because we will use only here in our App.
const loginUserSuccess = (dispatch, user) => {
  dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
  });

  Actions.main();
};