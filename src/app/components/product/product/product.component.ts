import {Component, Input} from '@angular/core';
import {products} from "src/app/data/products";
import {Product} from "src/app/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product

  details = false
}
