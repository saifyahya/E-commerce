import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ContainerComponent } from './container/container.component';
import { WhishListMessage } from './container/directives/WhishListMessage.directive';
import { WhishlistComponent } from './container/whishlist/whishlist.component';
import { CartsComponent } from './container/carts/carts.component';

// const routes: Routes = [
//   { path: '', component: ContainerComponent },
//   { path: 'products', component: ContainerComponent, children: [
//     { path: 'detail', component: ProductDetailComponent },
//     { path: 'whishlist', component: WhishlistComponent }
//   ] 
// },  { path: 'contact', component: ContactComponent },
// ];

const routes: Routes = [
  { path: '', component: ContainerComponent,children:[
    { path: 'products', component: ProductListComponent},
    { path: 'products/whishlist', component: WhishlistComponent },
    { path: 'products/cart', component: CartsComponent },

    { path: 'products/detail', component: ProductDetailComponent },
  ] },
  { path: 'contact', component: ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 