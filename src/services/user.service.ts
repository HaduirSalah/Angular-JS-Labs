import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/Shared-Classes-and-types/IUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 _UrlAPI='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient)
  {

  }
  // that return all the Users
  GetAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._UrlAPI).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server Error");
    }));
  }

}
