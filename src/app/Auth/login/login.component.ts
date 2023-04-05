import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(private _commonService:CommonService,private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  userLogin(){
    console.log(this.loginForm.value);
    this._commonService.loginUser(this.loginForm.value).subscribe((res:any)=>{
      console.log(res,'sdfsdfsdgsdg');
      localStorage.setItem('token',res.toString());
      this._router.navigate(['/home']);
    })
  }
}
