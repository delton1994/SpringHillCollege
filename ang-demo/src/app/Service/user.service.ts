import { Injectable } from "@angular/core";
import { User } from "../user";
import { enviroment } from "src/enviroments/enviroments";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class userService{
    private url = enviroment.apiUserUrl
    constructor(private http: HttpClient){}

    public getUser(username: string): Observable<User>{
        return this.http.get<User>(`${this.url}/${username}`)
    }
    public postUser(user: User): Observable<User>{
        return this.http.post<User>(`${this.url}`,user)
    }
    public updateUser(userId: number, email: string): Observable<User>{
        return this.http.put<User>(`${this.url}/${userId}`,email)
    }
    public deleteUser(userId: number): Observable<User>{
        return this.http.delete<User>(`${this.url}/${userId}`)
    }
}