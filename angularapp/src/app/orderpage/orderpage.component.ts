import { Component } from '@angular/core';
import { OrderServiceService } from '../orderServices/order-service.service';
import { Router } from '@angular/router';
import { CartModel } from '../models/cartModel';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent {
 
  productName:string='';
  price:string='';
  quantity:number=0;
  
  kartobj:any;
  KartId:any;
  orderobj:any;
  newObj:any;


  constructor(private orderdata:OrderServiceService,private router:Router){

    //Getting CartData through session
    this.KartId=sessionStorage.getItem('cartItemID');
    //this.KartId='101';
    console.log("hey 1");
    console.log(this.KartId);

    orderdata.getCart(this.KartId).subscribe((data)=>{
      console.log("hey 3");
      console.log("data",data);
      this.kartobj=data;
      this.addCartToOrders(this.kartobj);
    })
  }
  addCartToOrders(orderobj:any){
    this.orderdata.addCartToOrders(orderobj).subscribe((res)=>
      {
        console.log("hey 5")
        console.log(res);
        this.newObj=res;
        
      });
  }
  payment(){

    alert("Order placed Successfully!");
  }
}
