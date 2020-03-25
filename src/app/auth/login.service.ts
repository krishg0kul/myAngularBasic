import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  signUp=(details)=>{
    return this.http.post('http://localhost:4000/login',details)
  }
}
