import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';
import { Student } from 'src/app/student';
import {FormGroup,FormControl} from '@angular/forms'


@Component({
  selector: 'app-enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.css']
})
export class EnrollPageComponent {
  studentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    major: new FormControl(),
    dob: new FormControl()
  })

  constructor(private studentService: StudentService){}

  public onAddstudent(): void{
  
    let student: Student ={
      name: this.studentForm.value.name,
      email: this.studentForm.value.email,
      major: this.studentForm.value.major,
      phone: this.studentForm.value.phone,
      dob: this.studentForm.value.dob
    } 
   this.studentService.addStudent(student).subscribe(
    (response:Student)=>{
    },
    (error: HttpErrorResponse) =>{
      alert(error.message)
    }
  );
  }
}