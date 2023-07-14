import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Employees } from 'src/app/model/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  empDeatials!:Employees

  constructor(private activaterRoute:ActivatedRoute, private empService:EmployeesService){
    this.activaterRoute.params.subscribe(res=>{
      empService.getOneEmployee(res['id']).subscribe(res=>{
        this.empDeatials = res
      })
    })
  }

}
