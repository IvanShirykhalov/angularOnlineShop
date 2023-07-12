import {Component, OnInit} from '@angular/core';
import {Product} from "src/app/models/product";
import {ProductsService} from "src/app/services/products.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular online shop';
  //products: Product[] = []
  loading = false
  products$: Observable<Product[]>
  term = ''

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(tap(() => {
      this.loading = false
    }))
    // this.productsService.getAll().subscribe((products: Product[]) => {
    //   this.products = products
    //   this.loading = false
    // })

  }
}
