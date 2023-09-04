import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee-details/Employee.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // URL
  URL = 'http://localhost:8080/employee/list';

  constructor(private http: HttpClient) { }

  //Afficher
  getAllEmployee(): Observable<HttpResponse<Employee[]>> {
    return this.http.get<Employee[]>(this.URL, { observe: 'response'});
  }

  // Supprimer
  deleteEmployee(id: string): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.URL + '/ ' + id, { observe: 'response'});
  }
}
