import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  public students: Student[] = []; 
}