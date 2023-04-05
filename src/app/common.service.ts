import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  apiUrl ="http://localhost:9000/aliens/";
  userApiUrl ="http://localhost:9000/users/";

  public cartItemsSubject =new BehaviorSubject('');
  public cartpopupSubject =new BehaviorSubject('');
  public cartDetailsSubject =new BehaviorSubject('');
  public sibcomSubject =new BehaviorSubject(true);
  CartCount: any


 
  getCartDetailsItem(data:any){
    this.cartDetailsSubject.next(data);
    console.log('service data', data)
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
    return this._http.delete(`${this.apiUrl}${id}`);
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
    console.log(data, 'serveice');
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
