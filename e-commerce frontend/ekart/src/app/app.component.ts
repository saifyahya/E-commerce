import { AfterContentInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductListComponent } from './container/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

searchedInput:string='';

getSearchedInput(value: string) {
this.searchedInput=value;
}
  title = 'ekart';



}
