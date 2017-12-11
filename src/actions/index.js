import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED } from "./types";

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