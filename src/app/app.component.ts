import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  hdrouter: any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private _commonService:CommonService
  ) {}

  ngOnInit(): void {
    this._commonService.routeNameSubject.subscribe((res:any)=>{
      this.hdrouter = res;
    })
   
  }
}
