 export class ProductModel{
     productId:number=0;
	 imageUrl:string='';
	 productName:string='';
	 price:string='';
	 description:string='';
	 quantity:string='';

	 constructor( quantity:string, description:string, price:string,productId:number,imageUrl:string,productName:string)
	 {
		this.productId=productId;
		this.imageUrl=imageUrl;
		this.productName=productName;
		this.price=price;
		this.description=description;
		this.quantity=quantity
	 }
	 
	
 }