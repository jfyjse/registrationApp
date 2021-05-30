import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dataservice: DataService, private route: Router) {}

  ngOnInit(): void {}

  Login(email: any, password: any) {
    console.log(email,password);
    
    this.dataservice.Login(email, password)
    .subscribe((result: any) => {

      
      console.log("login ",result);
      
      if (result) {
        const user=result?.response;
      console.log(user);
      
      localStorage.setItem("user",user)
        alert('sucess');

        this.route.navigateByUrl('dashboard');
      }
    }),
      (result:any) => {
        alert(result.error.message);
      };
  }
}
