import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../model/Product.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() {
    console.log('step2');
    this.onProductSelected = new EventEmitter();
   }
   clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }

   isSelected(product: Product): boolean {
if ( !product || !this.currentProduct) {
  return false;
}
return product.sku === this.currentProduct.sku;
   }
  ngOnInit() {
  }

}
