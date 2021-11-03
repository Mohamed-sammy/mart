import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(res);
      console.log(this.product);
    });
  }
  // tslint:disable-next-line:typedef
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  // tslint:disable-next-line:typedef
  emptyCard() {
    this.cartService.removeAllCart();
  }

}
