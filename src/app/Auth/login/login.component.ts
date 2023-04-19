import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  userInfo: any;
  username: any;
  userId: any;
  adminuserId:any;
  isLoggedIn: boolean = true;
  password: any;
  uID: any;
  constructor(private _commonService: CommonService, private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  userLogin() {
    this._commonService.loginUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.userInfo = res;
        this.username = this.userInfo.user.email;
        this.password = this.userInfo.user.password;
        localStorage.setItem('token', res.toString());
        localStorage.setItem('uID', this.userInfo.user._id);
        this.userId = localStorage.setItem('uname', this.username);
        this.adminuserId = localStorage.setItem('uname', this.username);
        this._commonService.getUsername(this.userId);
        this._commonService.userLogoutSubject.subscribe((res: any) => {
          this.userId = res;
        });
        if (this.username === 'admin@gmail.com' && this.password === '123456') {
          this._router.navigate(['/all-products']);
          console.log(this.username);
        } else {
          this._router.navigate(['/home']);
        }
      },
      (err: any) => {
        alert('Please Enter Valid Email & Password');
      }
    );
  }
}
