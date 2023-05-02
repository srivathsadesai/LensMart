import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
    
  },
   {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'adminlogin',
    component:AdminLoginComponent
  },
  {
    path:'Product',
    component:ProductPageComponent
  },
  {
    path:'admin',
    component:AdminpageComponent
  },
  {
    path:'mycart',
    component:CartPageComponent
  },
  {
    path:'Orders',
    component:OrderpageComponent
  },
  {
    path:'logout',
    component:SignUpComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
