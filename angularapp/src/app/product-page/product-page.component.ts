import { Component } from '@angular/core';
import { AdmindataService } from '../adminServices/admindata.service';
import { Router } from '@angular/router';
import { CartDataService } from '../cartServices/cart-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  
  prod:any;
  prodId:any;
  constructor(private admindata:AdmindataService,private router:Router){
     
    admindata.produ().subscribe((data)=>{
      console.log("data",data);
      this.prod=data;
    });

  }
  //Setting Data through session
    public saveCart(productId:any){
      this.prodId=productId;
      console.log(this.prodId);
      sessionStorage.setItem("productId",this.prodId);
      //this.router.navigate(['/mycart']);
    }

}
