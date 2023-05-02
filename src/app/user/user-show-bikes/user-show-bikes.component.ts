import { Component,OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';

@Component({
  selector: 'app-user-show-bikes',
  templateUrl: './user-show-bikes.component.html',
  styleUrls: ['./user-show-bikes.component.css']
})
export class UserShowBikesComponent implements OnInit{
  public bikeData:any[]=[]
  constructor(private _bs:BikeService){}

  ngOnInit(): void {
    this._bs.listAllBikes().subscribe(response=>{
      this.bikeData = response.bikes
    },err=>{
      console.log(err)
    })
  }
}
