import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  userName: any;
  uemail: any;
  uid: any;
  Olystatus:boolean =false;
  uName: any;
  constructor(public _commonService:CommonService,private _router:Router) { }
  cartData:any=[];
  cartLength:any;
  cartStatus:any;

  ngOnInit(): void {

    this.uName = localStorage.getItem('uname');
    
   
    
    
    this._commonService.cartItemsSubject.subscribe((res:any)=>{
      this.cartData = res;
      this.cartLength = this.cartData.length;
    })
    // cartdetails
    this._commonService.cartDetailsSubject.subscribe((res:any)=>{
      this.cartLength = res.length;
    })
    this._commonService.cartpopupSubject.subscribe((res)=>{
      this.cartStatus=res;
    })
    // 
    this._commonService.usernameSubject.subscribe((res:any)=>{
      this.userName = res;
       this.uemail = localStorage.getItem("uname");
    })
   
  }

  
  openCart(){
    this.cartStatus = true;
  }

  logout(){
    this.uid = localStorage.removeItem('uname');
    this._commonService.logoutUser(this.uid);
    this._commonService.CartCount = 0;
    this.cartData = '';
    this._router.navigate(['home'])
  }

  closePop(){
    // this._commonService.getOvelayStatus(this.Olystatus);
    this.cartStatus = false;
  }

}
