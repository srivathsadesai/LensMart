export class CartModel{
    cartItemID:number=0;
    productName:string='';
    quantity:number=0;
    price:string='';
    productModel:any;

    constructor(cartItemID:number,productName:string,quantity:number,price:string,productModel:any){
        this.cartItemID=cartItemID;
        this.productName=productName;
        this.quantity=quantity;
        this.price=price;
        this.productModel=productModel;
    }

}