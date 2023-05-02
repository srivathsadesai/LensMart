import { Component, OnInit } from '@angular/core';
// import { productFrEnd } from '../models/productFrEnd';
import { AdmindataService } from '../adminServices/admindata.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent  {

  prod:any;
  constructor(private admindata:AdmindataService){
     
    admindata.produ().subscribe((data)=>{
      console.log("data",data);
      this.prod=data;
    })
  }
  getProdForm(data:any)
  {
    this.admindata.saveProd(data).subscribe((result)=>
    {
        console.log(result); 
    })
  }
  deleteProd(productId:any)
  {
    console.log(productId);
    this.admindata.deleteProd(productId).subscribe((result)=>{
      console.log(result);
    })
  }
}
