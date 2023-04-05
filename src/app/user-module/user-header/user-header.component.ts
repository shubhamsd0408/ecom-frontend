import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(public _commonService:CommonService) { }
  cartData:any=[];
  cartLength:any;
  cartStatus:any;

  ngOnInit(): void {
    this._commonService.cartItemsSubject.subscribe((res:any)=>{
      this.cartData = res;
      this.cartLength = this.cartData.length;
    })
    // cartdetails
    this._commonService.cartDetailsSubject.subscribe((res:any)=>{

      console.log(res,"hii");
      this.cartLength = res.length;
    })

    this._commonService.cartpopupSubject.subscribe((res)=>{
      this.cartStatus=res;
    })
  }

  openCart(){
    this.cartStatus = true;
  }


}
