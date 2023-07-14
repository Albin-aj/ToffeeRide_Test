import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {

  userForm!:FormGroup

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      fristName:['', Validators.required],
      lastName:['', Validators.required],
      gender:[''],
      dateOfBirth:[''],
      phone:['', Validators.required],
      email:['', [Validators.required,Validators.email]],
      addressLine1:[''],
      addressLine2:[''],
      street:[''],
      district:[''],
      state:[''],
      country:[''],
      pincode:[''],
      dateOfJoing:[''],
    })
  }


  get fc(){
    return this.userForm.controls
  }


  submit(){
    console.log(
    this.userForm.value
    );

  }



}
