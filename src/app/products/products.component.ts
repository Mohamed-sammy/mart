import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isAdmin: string;
  isLoading = false;
  pageSize = 4;
  page = 1;
   colSize: number;
  public productsList: any;
  public filterCategory: any;
  searchKey: string;
  constructor(private productService: ProductServiceService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe(res => {
      this.productsList = res;
      this.filterCategory = res;
      this.colSize = this.filterCategory.length;
      this.productsList.forEach((a: any) => {
        if (a.category === 'women\'s clothing' || a.category === 'men\'s clothing' ) {
          a.category = 'fashion';
        }
        Object.assign(a, {quantity: 1, total: a.price});
      });
      this.isLoading = false;
    });
    this.cartService.search
      .subscribe((val: any) => this.searchKey = val);
    this.isAdmin = localStorage.getItem('isAdmin');
  }
  // tslint:disable-next-line:typedef
  addToCart(item: any){
    this.cartService.addToCart(item);
  }
  // tslint:disable-next-line:typedef
  filter(category: string){
    this.filterCategory = this.productsList.filter((a: any) => {
      // tslint:disable-next-line:triple-equals
      if (a.category === category || category === '') {
        return a;
      }
    });
  }

}
