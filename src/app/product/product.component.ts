import { Component, OnInit } from '@angular/core';
// import { ApiService } from './api.service';
import { ApiService } from './../../Servicee/Product_Services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ApiService]
})
export class ProductComponent implements OnInit {
  products = [];

  constructor(private api:ApiService) {
    this.getProduct();
   }
   getProduct = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log(data)
      },  
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
  }

}
