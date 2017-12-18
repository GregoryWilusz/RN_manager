import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from "../actions/types";

//reducer's state
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' },
            // KEY INTERPOLATION - key we are adding to this object will be determined at runtime. If we call our creator with a prop
            // of NAME, this chunk of code [action.payload.prop]: will turn into name:
            // ALTERNATIVE version in old version:
            // const newState = {}; --> declaring the object
            // newState[action.payload.prop] = action.payload.value; --> and then:
            // return { ...state, ...newState }
            return { ...state, [action.payload.prop]: action.payload.value  }; // it's not an array!
        case EMPLOYEE_CREATE:
            return INITIAL_STATE; // Employee was successfully created so we want to clear all states.
        default:
            return state;
    }
};