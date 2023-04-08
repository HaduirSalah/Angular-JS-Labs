import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root', //'app-root'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myfirstapp';
  showProducts:boolean=false;
 @ViewChild (ProductsComponent) productComponnent!:ProductsComponent;



  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  onClickRenderValues()
  {
      this.showProducts=true;
      this.productComponnent.renderValues();
  }


}

