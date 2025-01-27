import { Component } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { productApi } from 'app/utils/apiUrls';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts(productApi, { page: 0, perPage: 10 }).subscribe((res) => console.log(res))
  }
}
