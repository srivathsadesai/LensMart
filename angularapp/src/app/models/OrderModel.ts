export class OrderModel{
    orderId:number =0;
    userId:number =0;
    productName:string = '';
    quantity:number=0;
    totalPrice:string = '';
    status:string = '';
    price:string = '';
    cartModel:any;

    constructor( cartModel:any,price:string,orderId:number,quantity:number,totalPrice:string,productName:string,userId:number,status:string){
	    this.orderId = orderId;
		this.userId = userId;
		this.productName = productName;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.status =status;
		this.price = price;
		this.cartModel = cartModel;
    }
}