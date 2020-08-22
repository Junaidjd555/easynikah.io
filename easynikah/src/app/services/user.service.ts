import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser(value: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/users');

  }
  createUser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3000/api/users/signup',model);
  }
  loginuser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3000/api/users/login',model);
  }
  upadateUser(model):Observable<User>{
    return this.http.put<User>('http://localhost:3000/api/users/'+model._id,model);
  }
}
