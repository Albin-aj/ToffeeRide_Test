import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
    return this.http.get<Employees>(`${environment.BASE_URL}/${id}`)
  }

  addNewEmployee(newUser:any):Observable<any>{
    return this.http.post<Employees>(environment.BASE_URL, newUser)
  }

  updatedData(updated:any,id:number){
    return this.http.put(`${environment.BASE_URL}/${id}`,updated)
  }

  deleteEmployee(id:number){
    return this.http.delete(`${environment.BASE_URL}/${id}`)
  }




   // -----Loading----

  $isTrue = new Subject<boolean>
  show(){
    this.$isTrue.next(true)
  }
  hide(){
    this.$isTrue.next(false)
  }

}
