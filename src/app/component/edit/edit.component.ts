import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Employees } from 'src/app/model/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  id!:number
  userForm!:FormGroup
  onSubmitValue:boolean = false

  constructor(private fb:FormBuilder, private empService:EmployeesService,
    private activatedRoute:ActivatedRoute,
    private toast:HotToastService ){

    this.userForm = this.fb.group({
      fristName:['', Validators.required],
      lastName:['', Validators.required],
      gender:['',Validators.required],
      dateOfBirth:['',[Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]],
      phone:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email:['', [Validators.required,Validators.email]],
      adderssLine1:['',Validators.required],
      adderssLine2:['',Validators.required],
      street:['',Validators.required],
      distric:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      pincode:['',Validators.required],
      dateOfJoing:['',[Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]]
    })

    this.activatedRoute.params.subscribe(res=>{
      this.id = res['id']
      this.empService.getOneEmployee(res['id']).subscribe(res=>{
        const  {empFirstName,empLastName,empGender,empDateOfBirth,empPhoneNumber,empEmailId,empHomeAddrLine1,empHomeAddrLine2
        ,empHomeAddrStreet,empHomeAddrDistrict, empHomeAddrState,empHomeAddrCountry,empHomeAddrPinCode,empDateOfJoining} = res

        this.fc['fristName'].setValue(empFirstName)
        this.fc['lastName'].setValue(empLastName)
        this.fc['gender'].setValue(empGender)
        this.fc['dateOfBirth'].setValue(empDateOfBirth)
        this.fc['phone'].setValue(empPhoneNumber)
        this.fc['email'].setValue(empEmailId)
        this.fc['adderssLine1'].setValue(empHomeAddrLine1)
        this.fc['adderssLine2'].setValue(empHomeAddrLine2)
        this.fc['street'].setValue(empHomeAddrStreet)
        this.fc['distric'].setValue(empHomeAddrDistrict)
        this.fc['state'].setValue(empHomeAddrState)
        this.fc['country'].setValue(empHomeAddrCountry)
        this.fc['pincode'].setValue(empHomeAddrPinCode)
        this.fc['dateOfJoing'].setValue(empDateOfJoining)
      })
    })
  }


  get fc(){
    return this.userForm.controls
  }

  onSubmit(){
    const newUser = this.userForm.value
    const {fristName,lastName,gender,dateOfBirth,phone,email,adderssLine1,adderssLine2,street,
    distric,state,country,pincode,dateOfJoing} = newUser
    const jsonUser: Partial<Employees> = {
      empFirstName:fristName,
      empLastName:lastName,
      empGender:gender,
      empDateOfBirth:dateOfBirth,
      empPhoneNumber:phone,
      empEmailId:email,
      empHomeAddrLine1:adderssLine1,
      empHomeAddrLine2:adderssLine2,
      empHomeAddrStreet:street,
      empHomeAddrDistrict:distric,
      empHomeAddrState:state,
      empHomeAddrCountry:country,
      empHomeAddrPinCode:pincode,
      empDateOfJoining:dateOfJoing
    }

   this.empService.updatedData(jsonUser,this.id).pipe(
    this.toast.observe({
      loading:'Saving...',
      success:'User added successfully!',
      error:'Error!!....Either phone number or email is already exists, or internal server error'
    })).subscribe(console.log)
  }

}
