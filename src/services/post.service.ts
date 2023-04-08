import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IPost } from 'src/app/Shared-Classes-and-types/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
_UrlAPI='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
 // that return all the Users
 GetAllPosts():Observable<IPost[]>
 {
   return this.http.get<IPost[]>(this._UrlAPI).pipe(catchError((err)=>
   {
     return throwError(()=>err.message || "Server Error");
   }));
 }
}
