import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // tslint:disable-next-line:typedef
  authUser(user: any){
    let userArr = [] ;
    if (localStorage.getItem('Users')) {
      userArr = JSON.parse(localStorage.getItem('Users'));
    }
    // tslint:disable-next-line:triple-equals
    return userArr.find(s => s.userName === user.userName && s.password === user.password && s.adminUser == user.adminUser);
  }
}
