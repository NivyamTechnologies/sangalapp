import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = ""
  password = ""

  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    private route  : Router,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  login()
  {
    this.api.login(this.email,this.password).subscribe((res)=>{
      if(res['login']=="authorized")
      {
        sessionStorage.setItem("xsW123",window.btoa("sdrawerufthsdfodfrweizxzfded"))
        this.route.navigate(['/home']);
      }
      else if(res['login'] == "passowrd incorrect")
      {
        alert("Incorrect Password")
      }
      else
      {
        alert("Error while login\n Contact System Administrator")
      }
    },err=>{
      if(err['status']=="401")
      {
        alert("User not found")
      }
      else
      {
        alert("Error while login\n Contact System Administrator")
      }
    })
  }

  // login()
  // {
  //   debugger
  //   let url = 'http://52.66.198.183:3000/users/login?ProfileId=sangalapp'
  //  let data= this.http.post(url,null,{'headers' : {'Authorization' : window.btoa(this.email+":"+this.password)}})
  //   data.subscribe((res)=>{
  //     if(res['login']=="authorized")
  //     {
  //       sessionStorage.setItem("xsW123",window.btoa("sdrawerufthsdfodfrweizxzfded"))
  //       // this.route.navigateByUrl('/dashboard/default')
  //     }
  //     else if(res['login'] == "passowrd incorrect")
  //     {
  //       alert("Incorrect Password")
  //     }
  //     else
  //     {
  //       alert("Error while login\n Contact System Administrator")
  //     }
  //   },err=>{
  //     if(err['status']=="401")
  //     {
  //       alert("User not found")
  //     }
  //     else
  //     {
  //       alert("Error while login\n Contact System Administrator")
  //     }
  //   })
  // }

  // login() {
  //   // Enabling Side Menu
  //   this.util.setMenuState(true);
  //   this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  // }

}
