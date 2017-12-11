import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    // banana: () => []    // dummy default reducer which always returns an empty array
    auth: AuthReducer
});