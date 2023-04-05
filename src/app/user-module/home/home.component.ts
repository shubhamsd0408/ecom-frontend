import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  resultData: any;

  constructor(private _commonService: CommonService) {}
  allProducts: any;
  userCart: any;
  token_id: any;
  allProduct: any;
  status:boolean = true;
  cartData: any = [];
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
    this._commonService.addTocart(data).subscribe((res: any) => {
      this.getCartItems();
      this._commonService.sibcomSubject.next(true);
      Swal.fire('Added!', 'item has been Added Successfully !', 'success');
    });
  }
}
