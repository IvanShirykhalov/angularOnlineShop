import { Component } from '@angular/core';
import {ProductsService} from "src/app/services/products.service";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'angular online shop';
  //products: Product[] = []
  loading = false
  //products$: Observable<Product[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(tap(() => {
    //   this.loading = false
    // }))
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
