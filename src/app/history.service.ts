import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private _http:HttpClient) { }
  public url:string = "http://localhost:3000/history"

  registerHistory(history:any){
    return this._http.post<{message:string,historyData:any}>(this.url+'/register',history)
  }

  updateBike(id:string,history:any){
    return this._http.put<{message:string}>(this.url+`/update/${id}`,history)
  }

  returnHistoryByUser(){
    return this._http.get<{message:string,historyData:any}>(this.url+'/byuser/'+localStorage.getItem('userID'))
  }

}
