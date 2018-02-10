import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "../actions/types";

const INITIAL_STATE = {
    email: '',         // state.auth.email = initial state after the app will boot up
    password: '',
    user: null,
    error: '',
    loading: false
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
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE,  user: action.payload }; // take all the existing properties on our
            // state object and also include action payload which is our user. WHEN THE USER SUCCESSFULLY LOGS IN we will
            // save that user model which has their email and uid on STATE.AUTH.USER
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false }; // here we could easily reset the password
                                                                  // typing: password: ''
        default:
            return state;

    }
};