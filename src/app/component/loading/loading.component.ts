import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading:boolean = false
  constructor(private emp:EmployeesService){
    emp.$isTrue.subscribe(res=>this.isLoading = res)
  }

}
