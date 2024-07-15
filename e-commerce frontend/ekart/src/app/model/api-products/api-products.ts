export class ApiProducts {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  tags: string[];
  quantity:number=1;

  constructor(
    id: number,
    title: string,
    description: string,
    images: string[],
    price: number,
    category: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.images = images;
    this.price = price;
    this.category = category;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.tags = tags;
  }

  public static optimizeDiscountPercentage(apiProducts:ApiProducts[]){
    apiProducts.forEach((p)=>p.discountPercentage = Number.parseInt(Math.ceil(p.discountPercentage)+""))
  }
}
