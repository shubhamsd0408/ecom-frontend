import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggelBtn:any
  constructor() { }

  ngOnInit(): void {
  }
  toggelNav(){
    this.toggelBtn != this.toggelBtn;
  }
}
