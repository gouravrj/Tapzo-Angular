import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public url:string = "http://localhost:3000/user"


  registerUser(user:any){
    return this._http.post<{message:string,user:any}>(this.url+'/register',user)
  }

  loginUser(loginInfo:any){
    return this._http.post<{message:string,user:any,token:any}>(this.url+'/login',loginInfo)
  }

}
