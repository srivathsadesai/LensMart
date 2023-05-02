import { Component, OnInit } from '@angular/core';
import { SignUpServiceService } from '../signUpService/sign-up-service.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  user: UserModel = new UserModel('', '', '', '', '');
  message: any;
  constructor(private signupservice: SignUpServiceService) {}
  ngOnInit(): void {}
  
  public registerNow() {
    let resp = this.signupservice.doRegestration(this.SignUpForm.value);
    resp.subscribe((data) => {
      this.message = data;
      alert("Registered Successfully! Please Login")

    });
  }
inteRegx=/^\d+$/
SignUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    username: new FormControl('',[Validators.required]),
    mobileNumber: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern(this.inteRegx)]),
    password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
    cnfPassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
  });
  SignUp() {
    console.log(this.SignUpForm.value);
  }
  getControl(name:any):AbstractControl|null{
    return this.SignUpForm.get(name);
  
  }
  // get email() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }
}
