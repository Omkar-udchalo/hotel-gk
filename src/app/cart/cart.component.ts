import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  currentCart: Cart[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.currentCart = this.cartService.getCart();
  }
}
