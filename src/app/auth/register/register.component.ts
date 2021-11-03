import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserServicesService } from 'src/app/service/authorization.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userSubmitted: boolean;
  registerationForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder,
              private userService: UserServicesService) { }

  ngOnInit(): void {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      adminUser: new FormControl(null, Validators.required),
      mobile: new FormControl(null, )
    });
  }

  // Getter methods for all form control
   // tslint:disable-next-line:typedef
   get userName(){
    return this.registerationForm.controls.userName as FormControl;
  }
   // tslint:disable-next-line:typedef
   get email(){
    return this.registerationForm.controls.email as FormControl;
  }
   // tslint:disable-next-line:typedef
   get password(){
    return this.registerationForm.controls.password as FormControl;
  }
    // tslint:disable-next-line:typedef
  get confirmpassword(){
    return this.registerationForm.controls.confirmpassword as FormControl;
  }
  // tslint:disable-next-line:typedef
  get adminUser(){
    return this.registerationForm.controls.adminUser as FormControl;
  }
  // tslint:disable-next-line:typedef
  get mobile(){
    return this.registerationForm.controls.mobile as FormControl;
  }
  passwordMatchingValidator(fg: FormGroup): Validators{
    const pass = fg.get('password').value;
    const confpass = fg.get('confirmpassword').value;
    return pass  === confpass ? null :
    {notmathced: true};
  }
   // tslint:disable-next-line:typedef
   onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
    // this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser((this.userData()));
    this.registerationForm.reset();
    this.userSubmitted = false;
    }

  }
  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      adminUser: this.adminUser.value,
      mobile: this.mobile.value
    };
  }



}
