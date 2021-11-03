import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public totalItem = 0 ;
  public searchTerm = '';
  loogedinUser: string;
  isAdmin: string;
  constructor(private cartService: CartService, private router: Router) {

  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    });
  }
  // tslint:disable-next-line:typedef
  loggedIn(){
    this.loogedinUser = localStorage.getItem('token');
    this.isAdmin = localStorage.getItem('isAdmin');
    console.log(this.loogedinUser);
    return this.loogedinUser;
   }
   // tslint:disable-next-line:typedef
   onloggedOut(){
     localStorage.removeItem('token');
   }
  // tslint:disable-next-line:typedef
  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}

