import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
 
  url2="http://localhost:9010/admin/";
  constructor(private htt:HttpClient) { }
  saveCart(data:any)
  {
    return this.htt.get(this.url2+'productId');
  }
}
