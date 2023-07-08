import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../models/user.model';

import {catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  db_url: string = 'http://localhost:5000';
  isclicked:boolean=false;
  userIdToChangePass:string="";
  tempUser!:UserI;
  constructor(private http: HttpClient) { }

  register(user: UserI){
    return this.http.post(`${this.db_url}/user/register`, user)
  }

  login(user: UserI){
    return this.http.post(`${this.db_url}/user/login`, user)
  }
  changePassword(password:string){
    let bodytosend={"password":password};
    return this.http.put(`${this.db_url}/user/${this.userIdToChangePass}`,bodytosend);
  }
  getToken(){
    // return localStorage.getItem('token');
    return sessionStorage.getItem('token');
  }

  getRole(){
    // let user = JSON.parse(String(localStorage.getItem('user')));
    let user = JSON.parse(String(sessionStorage.getItem('user')));

    return user?.role;
  }

  logOut(){
    // localStorage.clear(); //COn este borrariamos todo en localstorage
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user')
  }



  checkSession(){
    return this.http.get(`${this.db_url}/user/checksession`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    sessionStorage.clear();
    return throwError(error.error.message)
  }
}