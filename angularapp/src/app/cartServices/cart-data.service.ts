import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  url="http://localhost:9010/home/";
  url1="http://localhost:9010/cart/add1";
  
  constructor(private htt:HttpClient) { }

  //geting data by passing url and id recieved from session
  getProduct(productId:any)
  {
    console.log("Hi 2");
    console.log(productId);
    return this.htt.get<ProductModel>(this.url+productId);
  }
 
  addProductToCart(data:any)
  {
    console.log("Hi 4");
    console.log(data);
    return this.htt.post(this.url1,data);

  }

}
