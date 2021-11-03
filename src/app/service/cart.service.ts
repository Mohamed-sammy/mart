import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartItemList: any = [];
  // can emit and act as observable
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  constructor() { }

  // tslint:disable-next-line:typedef
  getProducts(){
    return this.productList.asObservable();
  }
  // tslint:disable-next-line:typedef
  setProduct( product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // tslint:disable-next-line:typedef
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  // tslint:disable-next-line:typedef
  removeCartItem(product: any){
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  // tslint:disable-next-line:typedef
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
