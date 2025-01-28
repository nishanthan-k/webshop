import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from 'app/models/product.model';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-product',
  imports: [ButtonModule, RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product
  loading = false;

  ngOnInit() {
    console.log(this.product);
  }

  load = () => {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;

    }, 2000);
  }
}
