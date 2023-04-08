import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../Shared-Classes-and-types/IProduct.ts';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  products: IProduct[] = [];
  @ViewChild (ChildComponent) Child!:ChildComponent;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getData() {
    // Do something to retrieve data from child component
  }

  handleChildEvent(data: IProduct[]) {
    this.products = data;
  }

 ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.Child.sayWelcome();

 }
}
