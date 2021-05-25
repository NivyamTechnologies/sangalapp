import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: any;
  email: any;
  pass: any;
  model = {
    "user_name" : '',
    "user_mobile" : '',
    "user_address" : '',
    "user_password" : '',
    "user_email" : '',
    "user_type" : 'customer'
  }
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  saver() {
    console.log(this.model);
    this.api.saveMasterDefinition("user",{user : [this.model]}).subscribe(()=>{
      alert("customer saved")
    },err=>{
      console.log(err);
      if(err.error.code="ER_DUP_ENTRY")
      {
        alert('Mobile No is already registerd')
      }
      else{
      alert("Signup failed")
      }
    })
  }

}
