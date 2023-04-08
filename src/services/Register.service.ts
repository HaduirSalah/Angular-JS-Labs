import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'src/app/Shared-Classes-and-types/Register';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _url:string="http://localhost:3000/Register";
constructor(private http:HttpClient) { }

Register(User: Register) {
  const user = User;
  const userJSON = JSON.stringify(user);

  let users: string[] = [];
  const localStorageUsers = localStorage.getItem('users');
  if (localStorageUsers !== null) {
    users = JSON.parse(localStorageUsers) ?? [];
  }
  users.push(userJSON);
  localStorage.setItem('users', JSON.stringify(users));

  // http call
  return this.http.post(this._url, User);
}



}
