import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  public price!:string
  public cid!:string
  public bikeid!:string
  public flag:boolean = false

  public amt!:number

  constructor(private _acroute:ActivatedRoute){}
  ngOnInit(): void {
    this.price = this._acroute.snapshot.paramMap.get('price') as string
    this.bikeid = this._acroute.snapshot.paramMap.get('bikeid') as string
    this.cid = localStorage.getItem('userID') as string

  }

  temp!:number
  onSubmit(days:any){
    this.flag = true
    this.temp = this.price as unknown as number
    this.amt = days*this.temp
    console.log(this.amt)
  }
  onChange(days:any){
    this.flag = true
    this.temp = this.price as unknown as number
    this.amt = days*this.temp
    console.log(this.amt)

  }
}
