import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PaginationParams, Products } from 'app/models/product.model';
import { Observable } from 'rxjs';
import { Options } from 'app/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    const options: Options = {
      params,
      responseType: 'json',
    };
    return this.apiService.get(url, options);
  }
}
