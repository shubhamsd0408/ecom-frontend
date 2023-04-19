import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin-module/header/header.component';
import { SidebarComponent } from './admin-module/sidebar/sidebar.component';
import { AllProductsComponent } from './admin-module/all-products/all-products.component';
import { AddProductsComponent } from './admin-module/add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './admin-module/edit-product/edit-product.component';
import { HomeComponent } from './user-module/home/home.component';
import { ProductsDetailsComponent } from './user-module/products-details/products-details.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { UserHeaderComponent } from './user-module/user-header/user-header.component';
import { CartDetailsComponent } from './user-module/cart-details/cart-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PlacedOrderComponent } from './user-module/placed-order/placed-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AllProductsComponent,
    AddProductsComponent,
    EditProductComponent,
    HomeComponent,
    ProductsDetailsComponent,
    RegisterComponent,
    LoginComponent,
    UserHeaderComponent,
    CartDetailsComponent,
    PlacedOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
