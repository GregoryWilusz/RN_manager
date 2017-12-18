import {
    EMPLOYEE_UPDATE
} from './types';


//One action creator ({prop, value }) to manage many states, e.g. changing the state of prop called name with a value of name.
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};