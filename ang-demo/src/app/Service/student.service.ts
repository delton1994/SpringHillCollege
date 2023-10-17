import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'
import { Student } from "../student";
import { enviroment } from "src/enviroments/enviroments";

@Injectable({
    providedIn: 'root'
})
export class StudentService{
    private apiUrl = enviroment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getStudent(): Observable<Student[]>{
        return this.http.get<Student[]>(`${this.apiUrl}`)
    }
    public addStudent(student:Student): Observable<Student>{
        return this.http.post<Student>(`${this.apiUrl}`,student)
    }
    public updateStudent(student:Student, studentId: number): Observable<Student>{
        return this.http.put<Student>(`${this.apiUrl}/${studentId}`,student)
    }    
    public deleteStudent(studentId: number): void{
        this.http.delete<void>(`${this.apiUrl}/${studentId}`)
    }
}