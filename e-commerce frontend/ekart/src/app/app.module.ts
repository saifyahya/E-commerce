import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BottomHeaderComponent } from './header/bottom-header/bottom-header.component';
import { HeaderFormComponent } from './header/header-form/header-form.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { WhishListMessage } from './container/directives/WhishListMessage.directive';
import { CartsComponent } from './container/carts/carts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product/product.service';
import { CategoryComponent } from './container/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomHeaderComponent,
    HeaderFormComponent,
    ContainerComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    WhishListMessage,
    CartsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
