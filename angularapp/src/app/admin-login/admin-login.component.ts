import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminloginService } from '../adminloginService/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  
  adminForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  message:any;
  errormessage: any;
  ans:any;

  constructor(private adminlogservice: AdminloginService, private router: Router) {}
  ngOnInit(): void {}
  
  public LoginadminNow() {
    let resp = this.adminlogservice.doLogin(this.adminForm.value);
    resp.subscribe((data) => {

      // alert("LoginSuccessfull")
      console.log("login now");
      this.message = data;
      if(Boolean(JSON.parse(this.message)))
      {
        console.log("true");
        this.router.navigate(['admin']);
      }else
      {
        alert("Invalid Credentials");
        console.log("false");
        
      }
      
      
    });

  }

  adminSubmit() {
    console.log(this.adminForm.value);
  }
  get email() {
    return this.adminForm.get('email');
  }
  get password() {
    return this.adminForm.get('password');
  }
}
