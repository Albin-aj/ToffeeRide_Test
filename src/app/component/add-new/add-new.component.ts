import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from 'src/app/model/employees';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {

  userForm!: FormGroup
  existMail?: Employees


  constructor(private fb: FormBuilder, private empService: EmployeesService,
    private toast: HotToastService) {

    this.userForm = this.fb.group({
      fristName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      adderssLine1: ['', Validators.required],
      adderssLine2: ['', Validators.required],
      street: ['', Validators.required],
      distric: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      dateOfJoing: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]]
    })
  }

  get fc() {
    return this.userForm.controls
  }

  onSubmit() {
      const newUser = this.userForm.value
      const { fristName, lastName, gender, dateOfBirth, phone, email, adderssLine1, adderssLine2, street,
      distric, state, country, pincode, dateOfJoing } = newUser


    const jsonUser: Partial<Employees> = {
      empFirstName: fristName,
      empLastName: lastName,
      empGender: gender,
      empDateOfBirth: dateOfBirth,
      empPhoneNumber: phone,
      empEmailId: email,
      empHomeAddrLine1: adderssLine1,
      empHomeAddrLine2: adderssLine2,
      empHomeAddrStreet: street,
      empHomeAddrDistrict: distric,
      empHomeAddrState: state,
      empHomeAddrCountry: country,
      empHomeAddrPinCode: pincode,
      empDateOfJoining: dateOfJoing
    }

    this.empService.addNewEmployee(jsonUser).pipe(
      this.toast.observe({
        loading: 'Saving...',
        success: 'Employee added successfully!',
        error: 'Email or phoneNo already exist.. Ohtherwise internal error found!!'
      })).subscribe()

      this.userForm.reset()
  }
}
