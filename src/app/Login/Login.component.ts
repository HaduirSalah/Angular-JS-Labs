import { Component, OnInit } from '@angular/core';
import { Login } from '../Shared-Classes-and-types/Login';
import { LoginService } from 'src/services/Login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel=new Login("","","");

  loginForm =this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
  });
  constructor(private loginService :LoginService,private fb:FormBuilder) { }

  ngOnInit() {
  }

  get email()
  {
     return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  // Node JS And Template Dirven Forms
  // submitData()
  // {
  //   //component ===> service
  //   //service==>http call
  //   this.loginService.Login(this.loginModel).subscribe({
  //     next:data=>console.log(data),
  //     error:error=>console.log(error)
  //   });
  // }


  // Reactive Forms
  submitData()
  {
    console.log(this.loginForm.value);
  }

}
