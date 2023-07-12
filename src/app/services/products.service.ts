import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {Product} from "src/app/models/product";
import {ErrorService} from "src/app/services/error.service";
import {products} from "src/app/data/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {

  }

  products: Product[] = []

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 3)
    }).pipe(
      //delay(3000),//- задержка на 3 секунды
      //retry(2), //запрос будет отправлен трижды (на всякий случай)
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

}
