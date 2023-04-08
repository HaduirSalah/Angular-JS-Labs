import { Component, OnInit } from '@angular/core';
import { Register } from '../Shared-Classes-and-types/Register';
import { RegisterService } from 'src/services/Register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  Options = ['Facebook', 'Twitter', 'Google'];
  registerModel = new Register('', '', '', '', '');
  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z]+'),
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        option: ['', Validators.required],
      },
      {
        validator: [ConfirmPasswordValidator],
      }
    );
  }

  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get option() {
    return this.registerForm.get('option');
  }

  // Node JS And Template Dirven Forms
  // submitData()
  // {
  //   //component ===> service
  //   //service==>http call
  //   this.registerService.Register(this.registerModel).subscribe({
  //     next:data=>console.log(data),
  //     error:error=>console.log(error)
  //   });
  // }

  // Reactive Forms
  submitData() {
    console.log(this.registerForm.value);
  }
}
