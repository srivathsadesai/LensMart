import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../loginService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  message:any;
  errormessage: any;
  ans:any;

  constructor(private logservice: LoginServiceService, private router: Router) {}
  ngOnInit(): void {}
  
  public LoginNow() {
    let resp = this.logservice.doLogin(this.userForm.value);
    resp.subscribe((data) => {

      // alert("LoginSuccessfull")
      console.log("login now");
      this.message = data;
      if(Boolean(JSON.parse(this.message)))
      {
        console.log("true");
        this.router.navigate(['./Product']);
      }else
      {
        alert("check password");
        console.log("false");
        this.router.navigate(['/login']);
        
      }
      
      
    });

  }

  userSubmit() {
    console.log(this.userForm.value);
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
}
