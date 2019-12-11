import {
  UPDATE_EMPLOYEE,
  EMPLOYEE_CREATED,
  EMPLOYEE_SAVED,
} from '../actions/types';

const INITIAL = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      //assign the value of the payload to a prop that can be used by a component
      //this is key interpolation
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATED:
      return INITIAL;

    case EMPLOYEE_SAVED:
      return INITIAL;

    default:
      return state;
  }
};
