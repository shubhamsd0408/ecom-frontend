import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private _commonService:CommonService,private actRoute:ActivatedRoute,private router:Router ) { }
    editProductForm = new FormGroup({
      image: new FormControl(),
      p_name: new FormControl(),
      quantity: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    })

  ngOnInit(): void {
    this._commonService.getPrductsById(this.actRoute.snapshot.params['id']).subscribe((res:any)=>{
      this.editProductForm=new FormGroup({
        image:new FormControl(res['image']),
        p_name:new FormControl(res['p_name']),
        quantity:new FormControl(res['quantity']),
        price:new FormControl(res['price']),
        description:new FormControl(res['description']),
      })
     })
  }

  updateProducts(){
    this._commonService.updateProduct(this.actRoute.snapshot.params['id'],this.editProductForm.value).subscribe(res=>{
      Swal.fire(
        'Updated!',
        'You item has been Updated Successfully !',
        'success'
      )
      console.log(res);
      
      this.router.navigate(['all-products']);
    })
  }
}
