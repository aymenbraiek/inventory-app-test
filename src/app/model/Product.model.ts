export class Product {
sku: string;
name: string;
imageUrl: string;
departement: string[];
price: number;
constructor(sku: string, name: string, imageUrl: string , departement: string[] , price: number) {
this.sku = sku;
this.name = name;
this.imageUrl = imageUrl;
this.departement = departement;
this.price = price;

}
}
