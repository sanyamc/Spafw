import { Component, OnInit, Injector } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {UserApi} from '../user-api';
@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  formError: string;
  submitting = false;

  constructor(private fb: FormBuilder,
              private userApi: UserApi,
              private router:Router) {   }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      rememberMe:false,


    })
  }

  onSubmit() {

    let signInForm = this.signInForm;
    
    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
            console.log('got valid: ', data);
            this.router.navigate(['/authenticated']);
          },
          (err)=> {
            this.submitting = false;
            console.log('got error: ', err);
            this.formError = err;
          }
        );
    }
  }

}
