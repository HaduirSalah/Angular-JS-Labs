import { Component } from '@angular/core';
import { ICategory } from '../Shared-Classes-and-types/ICategory';
import { IProduct } from '../Shared-Classes-and-types/IProduct.ts';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers.enum';
import { ProductService } from 'src/services/product-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];

  ClientName: string;
  IsPurchased?: boolean;

  errorMessage: any;

  buy() {
    this.IsPurchased = true;
  }

  constructor(private productService: ProductService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.Discount = DiscountOffers.FifteenPercent;
    // this.Discount=DiscountOffers['10%'];
    this.StoreName = 'App Store';
    this.StoreLogo = 'assets/favicon.jpg';
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
    this.CategoryList = [
      {
        ID: 1,
        Name: 'Mobile',
      },
      {
        ID: 2,
        Name: 'Accessories',
      },
    ];

    this.ClientName = 'Hadeer Salah';
  }

  renderValues() {
    this.productService.GetAllProducts().subscribe({
      next: (data) => (this.ProductList = data),
      error: (error) => (this.errorMessage = error),
    });

    // this.productService.GetProductById(1).subscribe({
    //   next: (product) => console.log(product),
    //   error: (error) => (this.errorMessage = error),
    // });
  }
  showProductsWithDiscound() {
    this.router.navigate(['products-with-discount'], { relativeTo: this.activatedRoute});
  }

  showProductsWithOutDiscound() {
    this.router.navigate(['products-without-discount'], { relativeTo: this.activatedRoute });
  }


}
