import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:any;
  constructor(private _commonService:CommonService,private _router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  registerUser(){
    // console.log(this.registerForm.value);
    this._commonService.newRegister(this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
      this._router.navigate(['/login']);
    })
  }
}
