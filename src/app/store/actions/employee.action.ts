import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export enum EmployeeActionTypes {
    LOAD_EMPLOYEE = '[EMPLOYEE] Load Employee',
    LOAD_EMPLOYEE_SUCCESS = '[EMPLOYEE] Load Employee Success',
    LOAD_EMPLOYEE_FAILURE = '[EMPLOYEE] Load Employee Failure',
    ADD_EMPLOYEE = '[EMPLOYEE] Add Employee',
    ADD_EMPLOYEE_SUCCESS = '[EMPLOYEE] Add Employee Success',
    ADD_EMPLOYEE_FAILURE = '[EMPLOYEE] Add Employee Failure',
    DELETE_EMPLOYEE = '[EMPLOYEE] Delete Employee',
    DELETE_EMPLOYEE_SUCCESS = '[EMPLOYEE] Delete Employee Success',
    DELETE_EMPLOYEE_FAILURE = '[EMPLOYEE] Delete Employee Failure'
}

export class LoadEmployeeAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_EMPLOYEE
  }
  export class LoadEmployeeSuccessAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS
  
    constructor(public payload: Array<Employee>) {}
  
  }
  export class LoadEmployeeFailureAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAILURE
    
    constructor(public payload: Error) {}
  }
  
  export class AddEmployeeAction implements Action {
    readonly type = EmployeeActionTypes.ADD_EMPLOYEE
  
    constructor(public payload: Employee) { }
  }
  export class AddEmployeeSuccessAction implements Action {
    readonly type = EmployeeActionTypes.ADD_EMPLOYEE_SUCCESS
  
    constructor(public payload: Employee) { }
  }
  export class AddEmployeeFailureAction implements Action {
    readonly type = EmployeeActionTypes.ADD_EMPLOYEE_FAILURE
  
    constructor(public payload: Error) { }
  }
  
  export class DeleteEmployeeAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_EMPLOYEE
  
    constructor(public payload: string) { }
  }
  
  export class DeleteEmployeeSuccessAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS
  
    constructor(public payload: string) { }
  }
  export class DeleteEmployeeFailureAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_FAILURE
  
    constructor(public payload: string) { }
  }
  
  export type EmployeeAction = AddEmployeeAction |
    AddEmployeeSuccessAction |
    AddEmployeeFailureAction |
    DeleteEmployeeAction |
    DeleteEmployeeSuccessAction |
    DeleteEmployeeFailureAction |
    LoadEmployeeAction |
    LoadEmployeeFailureAction |
    LoadEmployeeSuccessAction