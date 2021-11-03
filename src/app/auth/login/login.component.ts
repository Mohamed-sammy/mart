import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(private authService: AuthService,
              private roter: Router, ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onlogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    this.isLoading = true;
    if (token) {
      localStorage.setItem('token', token.userName);
      localStorage.setItem('isAdmin', token.adminUser);
      this.roter.navigate(['/products']);
      this.isLoading = false;
    } else  {
      this.isLoading = false;
    }
  }
}


