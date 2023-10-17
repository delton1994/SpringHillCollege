import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'app-auth-button',
    template: '<button (click)="auth.loginWithRedirect()"> Log in</button>',
    styleUrls: ['./Auth0-login-button.css']
})

export class AuthButton{
    constructor(public auth: AuthService){}
}