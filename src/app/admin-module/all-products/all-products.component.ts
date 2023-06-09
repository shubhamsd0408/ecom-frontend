import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  
})
export class AllProductsComponent implements OnInit {
  // id:any;
  allProductsData:any;
  allProductsData1:any;
  p: number = 1;
  userFilter: any = { p_name: '' };
  constructor(private _commonService:CommonService,private _http:HttpClient ,
    public _router:Router, private actived:ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
    ) {

     
     }

  ngOnInit():void {
    this.getProduct1();
 }



  getProduct1(){
    this._commonService.getAllProducts().subscribe((res:any)=>{
      this.allProductsData = res;
      this.changeDetectorRef.detectChanges();
    })
  }



  ondelete(data:any){
    // return this._http.delete("http://localhost:9000/aliens/del/" + data._id).subscribe((res:any)=>{
    //   console.log(res);
    //   this.getProduct1();
    // });

    // this._commonService.deleteProducts(data._id).subscribe((res:string)=>{
    //   console.log(res);
    //   this.getProduct1();
    // })


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          // this.common.deleteEmployee(id).subscribe(res=>{
          // console.log(res);
          // this.getEmp();  
          // console.log("hiii");
             
          // })
          this._commonService.deleteProducts(data._id).subscribe((res:string)=>{
            console.log(res);
            this.getProduct1();
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


 
  
 
}
