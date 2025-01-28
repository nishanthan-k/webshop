import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from 'app/components/product/product.component';
import { Product, Products } from 'app/models/product.model';
import { ProductsService } from 'app/services/products.service';
import { productApi } from 'app/utils/apiUrls';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, NgFor, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts(productApi, { page: 0, perPage: 10 }).subscribe((res: Products) => {
      console.log(res, Object.keys(res), res.items);
      this.products = res.items; // Safely access `items`
    });
  }
}
