import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   filteredCategory:string[]=[];
  takingInput(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    console.log(inputElement.value);
    this.saerchInCategories(inputElement.value)

  }
  saerchInCategories(value:string){
   this.filteredCategory=this.categories.filter((str)=>str.includes(value))
  }

checkCategoryUpdate():string[]{
if(this.filteredCategory.length>0)
  return this.filteredCategory
return this.categories;
}

  categories: string[] = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ];

  constructor() { }
  

  ngOnInit(): void { 
  }

  formatCategory(category: string): string {
    return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
}
