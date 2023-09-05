import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/Employee.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // URL
  URL = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

  //Afficher
  getAllEmployee(): Observable<HttpResponse<Employee[]>> {
    return this.http.get<Employee[]>(this.URL, {observe: 'response'});
  }

  // Add employee
  addEmployee(emp: Employee): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.URL, emp, {observe: 'response'});
  }
  
  // Get one employee
  getEmployeeById(id: string): Observable<HttpResponse<Employee>> {
    return this.http.get<Employee>(this.URL + '/ ' + id, { observe: 'response'});
}

  // Update employee
  updateEmployee(emp: Employee): Observable<HttpResponse<Employee>> {
    console.log('inside Service updating details');
    return this.http.put<Employee>(this.URL + '/ ' + emp.id, emp, { observe: 'response'});
  }
  // Supprimer
  deleteEmployee(id: string): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.URL + '/ ' + id, {observe: 'response'});
  }
}
