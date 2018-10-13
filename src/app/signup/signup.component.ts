import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform:FormGroup;
  isSubmitted:boolean=false;
  isValid:boolean=false;

  constructor() { }

  ngOnInit() {
    this.myform=new FormGroup({
      name :new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]*$/)])),
      email : new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password : new FormControl('',Validators.compose([Validators.required,Validators.min(6)])),
      confirmpassword : new FormControl('',Validators.compose([Validators.required,Validators.min(6),this.passwordMatchValidator]))
    });
    passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('passwordConfirm').value
         ? null : { 'mismatch': true };
     }
  }

}
