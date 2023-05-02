import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  url="http://localhost:9010/admin";
  url1="http://localhost:9010/admin/addProduct";


  constructor(private htt:HttpClient) { }
  produ()
  {
    return this.htt.get(this.url);
  }
  saveProd(data:any)
  {
    return this.htt.post(this.url1,data);
  }
  deleteProd(productId:any)
  {
    return this.htt.delete("http://localhost:9010/admin/delete/"+productId);
  }
  
}
