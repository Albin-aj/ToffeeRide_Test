import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Employees } from '../model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employees[]>{
   return this.http.get<Employees[]>(environment.BASE_URL)
  }


  getOneEmployee(id:number):Observable<Employees>{
    return this.http.get<Employees>(`${environment.SINGLE_EMP_URL}/${id}`)
  }

  addNewEmployee(){

  }


}
