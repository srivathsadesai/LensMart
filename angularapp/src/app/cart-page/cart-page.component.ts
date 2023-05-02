import { Component } from '@angular/core';
import { CartDataService } from '../cartServices/cart-data.service';
import { CartModel } from '../models/cartModel';
import { ProductModel } from '../models/ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl:'./cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  productName:string='';
  price:string='';
  quantity:number=0;
  prodobj:any;
  produId:any;
  cartObj:any;
  constructor(private cartdata:CartDataService,private router:Router){
    
    //Getting Data through session
     this.produId=sessionStorage.getItem('productId');
     console.log("hi 1");
     console.log(this.produId);

     
    cartdata.getProduct(this.produId).subscribe((data)=>{
      console.log("Hi 3");
      console.log("data",data);
      this.prodobj=data;
      this.addProductToCart(this.prodobj);
    });
    
}
addProductToCart(cartObj:any){
  console.log("addProductTo cart is called"+this.cartObj);
  this.cartdata.addProductToCart(cartObj).subscribe((res=>
    {
      console.log("Hi 5");
      console.log(res);
      this.cartObj=res;

      
    }
    ));
}

ShowProducts() {

  console.log("show products HI 6");
      console.log(this.prodobj);
       
    
 }


 //Setting CartData to orders using session
 kartId:any;
 public placeOrder(){
  console.log("place order called");
  // this.kartId=(JSON.parse(this.cartObj));
  console.log("cart id is"+this.cartObj.cartItemID);
  sessionStorage.setItem("cartItemID",this.cartObj.cartItemID);
  this.router.navigate(['/Orders']);

 }
}
