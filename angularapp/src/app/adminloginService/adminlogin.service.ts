import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  Create(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

// admin
public doLogin(user: any){
  return this.http.post("http://localhost:9010/login",user,{responseType:'text' as 'json'});
}

}

