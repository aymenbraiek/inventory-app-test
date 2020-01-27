import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/Product.model';

@Component({
  selector: 'app-product-departement',
  templateUrl: './product-departement.component.html',
  styleUrls: ['./product-departement.component.css']
})
export class ProductDepartementComponent implements OnInit {
@Input() product: Product;
  constructor() { 
    console.log('step5');
  }

  ngOnInit() {
  }

}
