import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const option ={withCredentials:false}

var url = 'http://localhost:3000/'


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}


Login(email: any, password: any) {
    const data = { "email" :email, "password" :password };
    localStorage.setItem("email",email)
    console.log("1")
    return this.http.post(url+"login", data,option)
  }

  signUp(fn: any,ln: any,email: any,password: any,city: any){
 const data= {"fname":fn,"lname":ln,"email":email,"password":password,"city":city}
 return this.http.post(url+"signup",data)
  }

getdata(email:any): Observable<any>{
// return this.http.get(url+"getdata/"+email)
console.log("gt data mail "+ email);

let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('currentUser', email);
        headers = headers.set('Access-Control-Allow-Origin', '*');

return this.http.get<any>(
  `${url}getdata/${email}`,{headers}
);
}

}



