import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './admin-module/add-products/add-products.component';
import { AllProductsComponent } from './admin-module/all-products/all-products.component';
import { EditProductComponent } from './admin-module/edit-product/edit-product.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CartDetailsComponent } from './user-module/cart-details/cart-details.component';
import { HomeComponent } from './user-module/home/home.component';
import { ProductsDetailsComponent } from './user-module/products-details/products-details.component';
import { PlacedOrderComponent } from './user-module/placed-order/placed-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:"all-products",component:AllProductsComponent},
  {path:"add-products",component:AddProductsComponent},
  {path:"add-products/:id",component:AddProductsComponent},
  {path:"edit-product/:id",component:EditProductComponent},
  {path:"home",component:HomeComponent},
  {path:"product-details/:id",component:ProductsDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cart-details",component:CartDetailsComponent},
  {path:"order-placed",component:PlacedOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
