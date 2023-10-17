import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from 'src/app/Service/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit{
  public students: Student[] = [];
  modalOptions:NgbModalOptions;
  exampleModal = document.getElementById('exampleModal')
  constructor(private studentService: StudentService,private modalService: NgbModal){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }
  
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudent().subscribe(
      (response: Student[]) => {
        this.students = response
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    );
  }
}
