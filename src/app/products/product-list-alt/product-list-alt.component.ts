import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent implements OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  products$: Observable<Product[]> = this.productService.products$
  sub!: Subscription;

  constructor(private productService: ProductService) { }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
