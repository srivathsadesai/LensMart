import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartModel } from '../models/cartModel';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
url="http://localhost:9010/cart/";
url1="http://localhost:9010/saveOrder";
url2="http://localhost:9010/placeOrder";

  constructor(private htt:HttpClient) { }

  //getting data by passing url and id recieved from session
getCart(cartItemID:any){
  console.log("Hey 2");
  console.log(cartItemID);
  return this.htt.get<CartModel>(this.url+cartItemID);
}
  addCartToOrders(data:any)
  {
    console.log("hey 4");
    console.log(data);
    return this.htt.post(this.url2,data);
  }
}
