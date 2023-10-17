import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthService as Auth } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';
import { User } from '../user';
import { userService } from '../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthButton } from '../Auth0-login-button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(public auth: AuthService, private Auth:Auth, private storageService: StorageService, private userService: userService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const user: User = this.form;
    this.Auth.login(user.username,user.password).subscribe(
    (response:any) =>{
      console.log(response)
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    })

    // this.userService.getUser(user.username).subscribe(
    //   (response: User)=>
    //   {
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     console.log(response)
    //   },
    //   (err: HttpErrorResponse)=> {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }
  reloadPage(): void {
    window.location.reload();
  }
}

