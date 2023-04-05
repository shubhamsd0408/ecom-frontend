import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  constructor(
    private _commonService: CommonService,
    private actRoute: ActivatedRoute
  ) {}
  productDetails: any;
  ngOnInit(): void {
    this._commonService
      .getPrductsById(this.actRoute.snapshot.params['id'])
      .subscribe((res: any) => {
        this.productDetails = res;
      });
  }
}
