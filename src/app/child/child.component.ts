import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Shared-Classes-and-types/IProduct.ts';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
   @Output() childEvent = new EventEmitter();

  //  productList: string[] = ['Product 1', 'Product 2', 'Product 3'];
  ProductList: IProduct[];
   constructor(){
    this.ProductList = [
      {
        ID: 1,
        Name: 'Samsung Galaxy A53 Dual Sim, 8GB RAM, 128GB Storage, 5G, Blue',
        Quantity: 10,
        Price: 100,
        Img: 'assets/1.jpg',
      },
      {
        ID: 2,
        Name: 'New Apple iPhone 13 with FaceTime (128GB) - Starlight',
        Quantity: 5,
        Price: 50,
        Img: 'assets/2.jpg',
      },
    ];

   }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

   }

   sendData()
   {
      // Fire event to hold data
      this.childEvent.emit(this.ProductList)
   }

   sayWelcome()
   {
    console.log('Welcome from child component!');
   }
}
