import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fname="test f name"
  lname="test l name"

  city="test city"

  email="test email"

  name= this.fname+" "+this.lname

  constructor() { }

  ngOnInit(): void {
  }

}
