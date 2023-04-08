import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/Shared-Classes-and-types/Login';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url:string="http://localhost:3000/Login";
constructor(private http:HttpClient) { }

Login(User: Login)
{

   // http call

    return this.http.post(this._url, User);
  }

}
