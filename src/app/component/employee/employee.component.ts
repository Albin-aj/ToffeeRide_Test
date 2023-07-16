import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Employees } from 'src/app/model/employees';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  empDeatials!: Employees;

  constructor(
    private activaterRoute: ActivatedRoute,
    private empService: EmployeesService,
    private toast: HotToastService,
    private router:Router
  ) {
    this.activaterRoute.params.subscribe((res) => {
      empService.getOneEmployee(res['id']).subscribe((res) => {
        this.empDeatials = res;
      });
    });
  }

  Delete(data: Employees) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empService.deleteEmployee(data.id).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.router.navigateByUrl('/')
          },
          (error) => {
            Swal.fire(
              'Error!', 'An error occurred while deleting the file.', 'error'
            );
          }
        );
      }
    });
  }
}
