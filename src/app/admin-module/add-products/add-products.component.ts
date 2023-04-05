import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  productForm:any;
  constructor(private _commonService:CommonService,public router:Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      image: new FormControl(),
      p_name: new FormControl(),
      quantity: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    })
  }

  onSubmit(){
    this._commonService.addNewProduct(this.productForm.value).subscribe((res:any)=>{
      console.log(res);
      Swal.fire(
        'Added!',
        'You item has been Added Successfully !',
        'success'
      )
      this.productForm.reset();
      this.router.navigate(['/all-products']);
    })
  }
}
