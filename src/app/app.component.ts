import { Component ,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from './store/models/employee.model';
import { AppState } from './store/models/app-state';
import { AddEmployeeAction,DeleteEmployeeAction ,LoadEmployeeAction} from './store/actions/employee.action';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Management';
  
  employees: Observable<Array<Employee>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newEmployee: Employee = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.employees = this.store.select(store => store.employee.list);
    this.loading$ = this.store.select(store => store.employee.loading);
    this.error$ = this.store.select(store => store.employee.error);

    this.store.dispatch(new LoadEmployeeAction());
    console.log(this.employees);
  }

  addEmployee() {
  this.newEmployee.id = uuid();

    this.store.dispatch(new AddEmployeeAction(this.newEmployee));

    this.newEmployee = { id: '', name: '' };
  }

  deleteEmployee(id: string) {
    this.store.dispatch(new DeleteEmployeeAction(id));
  }
}

  

  


  
