import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './store/models/employee.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private EMPLOYEE_URL = "http://localhost:3000/employees"

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Array<Employee>>(this.EMPLOYEE_URL)
      
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.EMPLOYEE_URL, employee)
      
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.EMPLOYEE_URL}/${id}`)
      
  }
}