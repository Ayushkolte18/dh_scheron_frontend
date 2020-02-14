import { Component, OnInit } from '@angular/core';
// import { ApiService } from './api.service';
import { ApiService } from './../../Servicee/Industry_Services/api.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css'],
  providers: [ApiService]
})
export class IndustriesComponent implements OnInit {
  products = [];

  constructor(private api:ApiService) {
    this.getIndustry();
   }
   getIndustry = () => {
    this.api.getAllIndustries().subscribe(
      data => {
        this.products = data; 
        console.log(data);
      },  
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
  }

}
