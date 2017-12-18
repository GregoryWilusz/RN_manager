import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
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