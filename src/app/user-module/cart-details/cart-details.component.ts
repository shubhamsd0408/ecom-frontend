import { Component, Input, OnInit } from '@angular/core';
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
  p_quantity:any =1;
  total_price:any;
  g_price:any;
  currPrice:any;
  totarray: any =[];
  total: any;
  totalamount: any;
  // resultData: any =[];

  constructor(private _commonService: CommonService) {}
  statusData: boolean | undefined;

  ngOnInit(): void {
    this.getdetailsId();
    this._commonService.sibcomSubject.subscribe((res) => {
      if (res) {
        this.getcartProductsById();
      }
    });
   
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
      this.cartDetails =[];
      this.allProducts.filter((item: any) => {
        this.data.map((ele: any) => {
          if (ele._id == item._id) {
            if(item._id){
              this.cartDetails.push(item);
            }
          }
        });
        this._commonService.getCartDetailsItem(this.cartDetails);
      });
      console.log(this.cartDetails, 'carddetails');
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

  quantityIncDec(data:any,id:any){
    
    if(data == 'plus'){
      this.cartDetails.map((item:any)=>{
        if(item._id === id){
          item.quantity ++;
          // item.price =  parseInt(item.price) * parseInt(item.quantity);
          this.totalPrice();
          this.allProducts.map((item:any)=>{
            if(item._id === id){
              // this.g_price = item.price;
              // this.currPrice = this.g_price;
              // this.totarray.push(this.currPrice);
          
            }
          });
          }
      })
    }
    else  {
      this.cartDetails.map((item:any)=>{
        if(item._id === id){
            item.quantity --;
        }
      })
    }
  }
  totalPrice(){
           let total=0
            this.cartDetails.forEach((ele:any) => {
            total += ele.price * ele.quantity;
            this.totalamount=total;
        });
      }
}
