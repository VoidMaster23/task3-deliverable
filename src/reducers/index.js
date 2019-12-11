import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployStuff from './EmployStuff';

//exports all reducers
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeReducer,
  employees: EmployStuff,
});
