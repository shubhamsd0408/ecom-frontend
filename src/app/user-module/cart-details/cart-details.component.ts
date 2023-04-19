import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit {
  allProducts: any;
  detailsId: any;
  cartDetails: any = [];
  p_quantity: any = 1;
  total_price: any;
  g_price: any;
  currPrice: any;
  totarray: any = [];
  total: any;
  totalamount: any = 0;
  oldPrice: any;
  // resultData: any =[];

  constructor(private _commonService: CommonService, private _router: Router) {}
  statusData: boolean | undefined;

  ngOnInit(): void {
    this.getdetailsId();
    this._commonService.sibcomSubject.subscribe((res) => {
      if (res) {
        this.getcartProductsById();
      }
    });
    this.totalPrice();
  }

  @Input() data: any = [];

  getdetailsId() {
    this._commonService.grtCartItems().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
  getcartProductsById() {
    this._commonService.getAllProducts().subscribe((res: any) => {
      this.allProducts = res;
      this.cartDetails = [];
      let logUserId = localStorage.getItem('uID');
      this.allProducts.filter((item: any) => {
        this.data.map((ele: any) => {
          if (ele._id == item._id) {
              this.cartDetails.push(item);
          }
        });
        this._commonService.getCartDetailsItem(this.cartDetails);
        this.totalPrice();
      });
    });
  }

  close() {
    this.statusData = false;
    this._commonService.getPopupStatus(this.statusData);
  }

  cartItemDelete(data: any) {
    this._commonService.deleteCartItem(data._id).subscribe((res: any) => {
      this.getdetailsId();
      this.getcartProductsById();
    });
  }

  quantityIncDec(data: any, id: any) {
    if (data == 'plus') {
      this.cartDetails.map((item: any) => {
        if (item._id === id) {
          this.oldPrice = item.price / item.quantity;
          item.quantity++;
          item.price = parseInt(this.oldPrice) * parseInt(item.quantity);
          this.totalPrice();
        }
      });
    } else {
      this.cartDetails.map((item: any) => {
        if (item._id === id) {
          this.oldPrice = item.price / item.quantity;
          item.quantity--;
          item.price = parseInt(this.oldPrice) * parseInt(item.quantity);
          this.totalPrice();
        }
      });
    }
  }
  totalPrice() {
    this.total = 0;
    if (this.cartDetails.length == 0) {
      this.totalamount = 0;
    } else {
      this.cartDetails.forEach((ele: any) => {
        this.total += parseInt(ele.price);
        this.totalamount = this.total;
      });
    }
  }
  placeOrder() {
    if (localStorage.getItem('uname') == null) {
      this._router.navigate(['login']);
      this.close();
    } else {
      this._router.navigate(['order-placed']);
      this.close();
    }
  }
}
