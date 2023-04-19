import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor(private _commonService: CommonService,private _router:Router) {}
  allProducts: any;
  userCart: any;
  token_id: any;
  allProduct: any;
  status:boolean = true;
  cartData: any = [];
  addCartData: any = [];
  itemExists: number[] = [];
  resultData: any;
  // btnDis: boolean =false;
  userFilter: any = { p_name: '' };

  ngOnInit(): void {
    this._commonService.getAllProducts().subscribe((res: any) => {
      this.allProducts = res;
    });
    this.token_id = localStorage.getItem('token');
    this.getCartItems();
  }

  getCartItems() {
    this._commonService.grtCartItems().subscribe((res: any) => {
      this.cartData = res;
      this._commonService.getCartItems(this.cartData);
    });
  }

  addCart(data: any) {

    if(localStorage.getItem('uname')==null){
      this._router.navigate(['login']);
    }
    else{
      let uid = localStorage.getItem('uID');
    data._uid = uid;
    this._commonService.addTocart(data).subscribe((res: any) => {
      this.addCartData =res;
      this.getCartItems();
      if (this.addCartData._id && !this.itemExists.includes(this.addCartData._id)) {
        this.itemExists.push(this.addCartData._id);
      }
      this._commonService.sibcomSubject.next(true);
      Swal.fire('Added!', 'item has been Added Successfully !', 'success');
    });
    }
    
  }
}
