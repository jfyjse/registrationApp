import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser=localStorage.getItem("email")
  fname="test f name"
  lname="test l name"

  city="test city"

  email="test email"

  name= this.fname+" "+this.lname

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

getdata(){
this.dataservice.getdata(this.currentuser).subscribe((result:any)=>{
  console.log("result : "+result);
  
  if(result){
   this.fname=result.fname
   this.lname=result.lname
   this.city=result.city
   this.email=result.email
   console.log(result);
   
  }
  
},(err:any)=>{
  console.log(err.error.message);
  
})
 }

}
