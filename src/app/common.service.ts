import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import{Observable, Subject, filter } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
// import 'rxjs/operator/filter';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentRoute: any;
  // routeName: string;
  constructor(private _http:HttpClient,  public location: Location ,private router: Router) { 
    // this.routeName = this.location.path();
    // this.routeNameSubject.next(this.routeName);
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    )
    .subscribe((event:any) => 
     {
        this.currentRoute = event.url;          
        this.routeNameSubject.next(this.currentRoute);
     });
}
  


  
  apiUrl ="https://brzu-backend.onrender.com/aliens/";
  userApiUrl ="https://brzu-backend.onrender.com/users/";

  public cartItemsSubject =new BehaviorSubject('');
  public cartpopupSubject =new BehaviorSubject('');
  public cartDetailsSubject =new BehaviorSubject('');
  public usernameSubject =new BehaviorSubject('');
  public userLogoutSubject =new BehaviorSubject('');
  public sibcomSubject =new BehaviorSubject(true);
  CartCount: number|undefined;
  public overlayPopCloseSubject =new BehaviorSubject('');
  public routeNameSubject =new BehaviorSubject('');

 
  getUsername(data:any){
    this.usernameSubject.next(data);
  }
 
  //Logout user
  logoutUser(data:any){
    this.usernameSubject.next(data);
  }
  getCartDetailsItem(data:any){
    this.cartDetailsSubject.next(data);
    this.CartCount = data.length
  }
  getCartItems(data:any){
    this.cartItemsSubject.next(data);
  }
  getPopupStatus(data:any){
    this.cartpopupSubject.next(data);
  }


  grtCartItems(){
    return this._http.get(this.userApiUrl);
  }
  // 


  // Get All products
  getAllProducts(){
    return this._http.get(this.apiUrl);
  }
  // Add Product
  addNewProduct(data:any){
    return this._http.post(this.apiUrl,data);
  }
  // Delete
  deleteProducts(id:any):Observable<any>{
    return this._http.delete(this.apiUrl +'del/' +id);
  }
  //Get Product by id
  getPrductsById(id:any){
    return this._http.get(`${this.apiUrl}${id}`);
  } 
  // update employee
  updateProduct(id:any,data:any){
    return this._http.put(`${this.apiUrl}${id}`,data)
  }

  // register user
  newRegister(data:any){
    return this._http.post(this.userApiUrl + 'register',data);
  }
  // User login

  loginUser(data:any){
    // console.log(data, 'serveice');
    return this._http.post(this.userApiUrl + 'login',data);
  }

  // add cart
  addTocart(data:any){
    return this._http.post(this.userApiUrl + 'addcart',data);
  }
  // delete cart item
  deleteCartItem(id:any){
    return this._http.delete(`${this.userApiUrl}${id}`);
  }
}
