import { Component } from '@angular/core';
import { Product } from './model/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';

  products: Product[];
  constructor() {
    console.log('step 1');
// tslint:disable-next-line:whitespace
    this.products=[new Product(
     'MYSHOES',
     'Black Running Shoes',
     '/assets/images/black-shoes.jpg',
     ['Men', 'Shoes', 'Running Shosqcqccqcqces'],
     109.99),
     new Product(
     'NEATOJACKET',
     'Blue Jacket',
     '/assets/images/blue-jacket.jpg',
     ['Women', 'Apparel', 'Jackets & Vests'],
     238.99),
     new Product(
     'NICEHAT',
     'A Nice Black Hat',
     '/assets/images/black-hat.jpg',
   ['Men', 'Accessories', 'Hats'],
   29.99)];
  }

  productWasSelected(product: Product): void {
  console.log('Products clicked:', product);
  }
}
