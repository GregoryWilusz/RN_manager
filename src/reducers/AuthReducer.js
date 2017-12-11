import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
    email: '',         // state.auth.email = initial state after the app will boot up
    password: ''
};

export default  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; // Make a new object ( {} ), take all of the properties of my
                                // existing state object and throw them into that object (...state) -> then define
                                // the property email, give it a value (action.payload) and toss it on top of whatever
                                // properties are on that state object and override it with a new existing value.
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;

    }
};