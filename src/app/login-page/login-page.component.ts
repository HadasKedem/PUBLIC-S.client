import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { loginService } from './services/loginService.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
@Injectable()
export class LoginPageComponent {

  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();
  
  public userToken:string = '';

  public login = this.formBuilder.group({
    username:'',
    password:'',
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private loginservice: loginService) { }

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    
    userFormControl = new FormControl('', [
      Validators.required
    ]);
  
    passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    matcher = new MyErrorStateMatcher();


    onSubmit(): void {   
      console.log('before');   
      let loginUser = this.login.value;      
      this.loginservice.loginUser(loginUser, "").subscribe(responseToken => {
        if(responseToken) {
          console.log('after');
            this.userToken = responseToken;
            localStorage.setItem("userToken", responseToken);
            localStorage.setItem("userEmail", loginUser.username);
            this.loginservice.getUserByEmail(loginUser.username).subscribe(userObject => {
              if (userObject) {
                localStorage.setItem('user', JSON.stringify(userObject));
              }
            });          
        }
      });
      this.getLoggedIn.emit(true);
      this.router.navigate(['/']);
    };
}