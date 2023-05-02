import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private http:HttpClient) { }
  // regs
public doRegestration(user: any){
  return this.http.post("http://localhost:9010/signup",user,{responseType:'text' as 'json'});
}
}
