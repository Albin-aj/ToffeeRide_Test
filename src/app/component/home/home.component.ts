import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, filter, map } from 'rxjs';
import { Employees } from 'src/app/model/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchString!: string;
  search?: any;
  $searchInputs = new Subject<string>();
  allEmployees!: Observable<Employees[]>;
  EmployeesList: Employees[] = [];

  constructor(private empService: EmployeesService) {
    this.$searchInputs.pipe(debounceTime(300)).subscribe((res) => {
      this.searchEmp(res);
      if (this.search == undefined || this.searchString.length == 0) {
        this.allEmployees.subscribe((res) => (this.EmployeesList = res));
      }
    })
  }



  ngOnInit(): void {
    this.allEmployees = this.empService.getAllEmployees();
    if (this.search == undefined) {
      this.allEmployees.subscribe((res) => (this.EmployeesList = res));
    }
  }



  searchEmp(input: string) {
    this.allEmployees.subscribe((res) => {
      this.search = res.filter((e) => {
        if (!e) return;
        return e.empFirstName.toLowerCase().includes(input.toLowerCase());
      });
    })
    this.EmployeesList = this.search;
    console.log(this.search);
  }
}
