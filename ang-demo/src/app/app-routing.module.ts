import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { StudentsPageComponent } from './Page/students-page/students-page.component';
import { EnrollPageComponent } from './Page/enroll-page/enroll-page.component';
import { ContactPageComponent } from './Page/contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'enroll', component: EnrollPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
