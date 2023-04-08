import { Component } from '@angular/core';
import { IProduct } from '../Shared-Classes-and-types/IProduct.ts';

@Component({
  selector: 'app-products-with-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent {
   Products!:IProduct[];
  //  Products?:IProduct[];
  constructor() { }

}
