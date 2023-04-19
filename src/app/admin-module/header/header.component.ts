import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggelBtn:any
  uemail!: string | null;
  _commonService: any;
  userName: any;
  uemailA: any;
 
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.uemail = localStorage.getItem("uname");
    this.uemailA = localStorage.getItem("uname");
    console.log(this.uemail,'veera');
    
    // this._commonService.usernameSubject.subscribe((res:any)=>{
    //   this.userName = res;
    //    this.uemail = localStorage.getItem("uname");
    // })
  }
  toggelNav(){
    this.toggelBtn != this.toggelBtn;
  }
  logout(){
    localStorage.removeItem('uname');
    this._router.navigate(['/login'])
  }
}
