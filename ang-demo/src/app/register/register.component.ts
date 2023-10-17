import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';
import { User } from '../user';
import { userService } from '../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService as Auth } from '@auth0/auth0-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: any = {
    email: null,
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(public Auth: Auth, private authService: AuthService, private storageService: StorageService,private userSerivce: userService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const user = this.form;

    this.userSerivce.postUser(user).subscribe(
      (response)=>{
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      (error: HttpErrorResponse)=> {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
    reloadPage(): void {
      window.location.reload();
    }
}