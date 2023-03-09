import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent {
  @Input() product!: Product;
  display: boolean = false;

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.messageService.add({
      severity: 'success',
      detail: 'Se agrega al carrito de compras',
    });
  }

  showDialog() {
    this.display = true;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
