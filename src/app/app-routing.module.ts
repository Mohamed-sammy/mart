import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AddProductGuard } from './guards/add-product.guard';
import { UpdateProductGuard } from './guards/update-product.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'addproduct', component: AddProductComponent, canActivate: [AddProductGuard] },
  { path: 'updateproduct', component: UpdateProductComponent, canActivate: [UpdateProductGuard] } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
