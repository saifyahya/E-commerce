import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'products', component: ContainerComponent, children: [
    { path: 'detail', component: ProductDetailComponent }
  ] 
},  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 