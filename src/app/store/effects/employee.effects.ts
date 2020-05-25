import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadEmployeeAction, EmployeeActionTypes, LoadEmployeeSuccessAction, LoadEmployeeFailureAction, AddEmployeeAction , AddEmployeeFailureAction,AddEmployeeSuccessAction,DeleteEmployeeAction,DeleteEmployeeFailureAction,DeleteEmployeeSuccessAction } from '../actions/employee.action'
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
      ) { }

  @Effect() loadEmployees$ = this.actions$
    .pipe(
      ofType<LoadEmployeeAction>(EmployeeActionTypes.LOAD_EMPLOYEE),
      mergeMap(
        () => this.employeeService.getEmployees()
          .pipe(
            map(data => {
              return new LoadEmployeeSuccessAction(data)
            }),
            catchError(error => of(new LoadEmployeeFailureAction(error)))
          )
      ),
  )
  @Effect() addEmployee$ = this.actions$
  .pipe(
    ofType<AddEmployeeAction>(EmployeeActionTypes.ADD_EMPLOYEE),
    mergeMap(
      (data) => this.employeeService.addEmployee(data.payload)
        .pipe(
          map(() => new AddEmployeeSuccessAction(data.payload)),
          catchError(error => of(new AddEmployeeFailureAction(error)))
        )
    )
)

@Effect() deleteShoppingItem$ = this.actions$
  .pipe(
    ofType<DeleteEmployeeAction>(EmployeeActionTypes.DELETE_EMPLOYEE),
    mergeMap(
      (data) => this.employeeService.deleteEmployee(data.payload)
        .pipe(
          map(() => new DeleteEmployeeSuccessAction(data.payload)),
          catchError(error => of(new DeleteEmployeeFailureAction(error)))
        )
    )
  )
  
}