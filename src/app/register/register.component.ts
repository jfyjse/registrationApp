import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice : DataService, private route:Router) { }

  ngOnInit(): void {
  }


  signUp(fn: any,ln: any,email: any,password: any,city: any){

    this.dataservice.signUp(fn,ln,email,password,city).subscribe((result: any) => {
           
      if (result) {
        alert('user added');
        this.route.navigateByUrl('');
      }
    },
      (result: any) => {
        
        alert(result.error.message)
        
      }
    )
  }

}
