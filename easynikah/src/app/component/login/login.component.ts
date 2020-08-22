import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { $ } from 'protractor';
import * as $ from 'jquery' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
    $("#first").fadeOut("fast", function() {

      $("#second").fadeIn("fast");
      
      });
  }

  Login(){
    $("#second").fadeOut("fast", function() {
      $("#first").fadeIn("fast");
      });
  }

}
