import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../Shared-Classes-and-types/IProduct.ts';
import { ProductService } from 'src/services/product-service';
import { ForbiddenNameValidator } from '../validations/name.validators';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  Products?:IProduct[];

  constructor(private fb:FormBuilder , private productService:ProductService)
  {
    this.Products = [
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

  ngOnInit() {
    this.productService.GetAllProducts().subscribe((products) => {
      this.Products = products;
  })
}
showDiscountInput: boolean = false;
  notesForm=this.fb.group({
    name:['',[Validators.required,ForbiddenNameValidator(/admin|administrator/)]],
    selectedProduct:[''],
    hasDiscount: [false],
    discount: [{value: '', disabled: true}, Validators.required],
    comment:[''],
    aleternativeComments:this.fb.array([]),

  })


// forbiddenNameValidator(forbiddenName:RegExp)
//   {
//     return (control:any)=>
//     {
//       const forbidden=forbiddenName.test(control.value);
//       return forbidden?{forbiddenName:{value:control.value}}:null;
//     }
//   }

  onHasDiscountChange() {
    if (this.hasDiscount?.value) {
      this.discount?.enable();
      this.discount?.setValidators([Validators.required, Validators.min(1), Validators.max(100)]);
      this.showDiscountInput = true;
    } else {
      this.discount?.disable();
      this.discount?.clearValidators();
      this.showDiscountInput = false;
    }
    this.discount?.updateValueAndValidity();
  }

  get name()
  {
    return this.notesForm.get('name');
  }
  

  get hasDiscount() { return this.notesForm.get('hasDiscount'); }

  get discount() { return this.notesForm.get('discount'); }

  get comment()
  {
    return this.notesForm.get('comment');
  }

  get aleternativeComments()
  {
    return this.notesForm.get('aleternativeComments') as FormArray;
  }

  addAlternativeComment()
  {
    this.aleternativeComments.push(this.fb.control(''));
  }

  deleteComment(index:any)
  {
   this.aleternativeComments.removeAt(index);
  }

  submitData()
  {
    console.log(this.notesForm.value)
  }
}

