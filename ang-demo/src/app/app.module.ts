import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentService } from './Service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentsPageComponent } from './Page/students-page/students-page.component';
import { EnrollPageComponent } from './Page/enroll-page/enroll-page.component';
import { ContactPageComponent } from './Page/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { enviroment } from 'src/enviroments/enviroments';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButton } from './Auth0-login-button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentCardComponent,
    StudentsPageComponent,
    EnrollPageComponent,
    ContactPageComponent,
    LoginComponent,
    RegisterComponent,
    AuthButton
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AuthModule.forRoot(enviroment.auth),
  ],
  providers: [StudentService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
