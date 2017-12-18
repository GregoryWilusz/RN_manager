import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    // banana: () => []    // dummy default reducer which always returns an empty array
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer, // what do we call a piece of state
    employees: EmployeeReducer
});