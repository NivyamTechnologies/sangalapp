import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serIP='52.66.198.183:3000'
   ProfileId = 'sangalapp'

  constructor(private http: HttpClient,private datepipe:DatePipe) { }

  login(email="",password="")
  {
    let url = 'http://'+this.serIP+"/users/sangalapplogin?ProfileId="+this.ProfileId
    //return this.http.post(url,{credientials : window.btoa(email+":"+password)})
    return this.http.post(url,null,{'headers' : {'Authorization' : window.btoa(email+":"+password)}})
  }

  saveMasterDefinition(EntityName,data)
  {
    return  this.Post("/master/saveMasterDefinition",{DataToUpdate : data},["EntityName="+EntityName])
  }

  Get(url,params = [])
  {
    
  
    let final_url = this.getParams(url,params)
    console.log(final_url)
    return this.http.get(final_url)
  }

  Post(url,body={},params=[])
  {
    let final_url = this.getParams(url,params)
    console.log(final_url)
    return this.http.post(final_url,body)
  }
  
  getParams(url,params=[])
  {
    let final_url = 'http://'+this.serIP+url+"?ProfileId="+this.ProfileId+"&"
    params.forEach(elem=>{
      final_url+=elem+"&"  
    })

    final_url = final_url.substring(0,final_url.length-1)
    
    return final_url
  }
}
