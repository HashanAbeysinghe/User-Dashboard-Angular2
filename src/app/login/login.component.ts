import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './../authentication.service';


import {User} from './../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; 
  public submitted: boolean; 
  error = '' ;

  constructor(private _fb: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,) {
    this.submitted =false;
   }

  ngOnInit() {

    this.authenticationService.logout();
    this.loginForm = this._fb.group({
        name: ['', [<any>Validators.required]],
        password: ['', [<any>Validators.required]],
    });


  }

  login(model: User) {
        this.submitted = true; 

        this.authenticationService.login(model.name, model.password)
          .subscribe(result => {
            if(result==true){
              
              this.router.navigate(['/']);
            }else{
              this.error = 'Username or password is incorrect';
              this.submitted = false;
            }
          });
        

  }

}

