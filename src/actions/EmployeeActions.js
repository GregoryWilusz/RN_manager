import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';


//One action creator ({prop, value }) to manage many states, e.g. changing the state of prop called name with a value of name.
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.main({ type: 'reset' });
                dispatch({ type: EMPLOYEE_CREATE})
            }); // to hide back button after returning to the employeeList
    }
};
// it's going to be an asynchronous action, so we need to use fat arrow function which return a dispatch method.
export const employeesFetch = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
// Anytime, any 'values', comes across this ref, call fat arrow function with an snapshot object as an argument to DESCRIBE that data
// that are sitting in there. Then we will dispatch an action. snapshot.val() - here this is a magic. This is how we exactly get access
// to the data that is out this ref right here. We are WATCHING on events using .on() event handler for any changes,
// after calling by employeesFetch is persisted!
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};