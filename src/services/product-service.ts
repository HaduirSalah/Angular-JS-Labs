import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from 'src/app/Shared-Classes-and-types/IProduct.ts';

@Injectable({
  providedIn: 'root'
})
export class ProductService
 {
  Products!: IProduct[];
_url:string="/assets/Data/Product.json";
  constructor(private http:HttpClient) { }

  // that return all the products
  GetAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
          return throwError(()=>err.message || "Server Error");
    }));

  }
  // that return the product with the specified id that passed as parameter.
  //With the following validatations
  GetProductById(prdId: any) {
    if (isNaN(prdId)) {
      return null;
    }

    const product = this.Products.find(p => p.ID === prdId);
    if (!product) {
      return null;
    }

    return product;
  }

}
