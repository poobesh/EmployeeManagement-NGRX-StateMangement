import { EmployeeActionTypes, EmployeeAction } from '../actions/employee.action';
import { Employee } from '../models/employee.model';

export interface EmployeeState {
    list: Employee[],
    loading: boolean,
    error: Error
}
const initialState: EmployeeState = {
    list: [],
    loading: false,
    error: undefined
};

export function EmployeeReducer(state: EmployeeState = initialState, action: EmployeeAction) {
    switch (action.type) {
      case EmployeeActionTypes.LOAD_EMPLOYEE:
        return {
          ...state,
          loading: true
        }
      case EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS:
        return {
          ...state,
          list: action.payload,
          loading: false
        }
      
      case EmployeeActionTypes.LOAD_EMPLOYEE_FAILURE: 
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      
      case EmployeeActionTypes.ADD_EMPLOYEE:
        return {
          ...state,
          loading: true
        }
      case EmployeeActionTypes.ADD_EMPLOYEE_SUCCESS:
        return {
          ...state,
          list: [...state.list, action.payload],
          loading: false
        };
      case EmployeeActionTypes.ADD_EMPLOYEE_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      case EmployeeActionTypes.DELETE_EMPLOYEE:
        return {
          ...state,
          loading: true
        };
      case EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          list: state.list.filter(employee => employee.id !== action.payload),
          loading: false
        }
      case EmployeeActionTypes.DELETE_EMPLOYEE_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
