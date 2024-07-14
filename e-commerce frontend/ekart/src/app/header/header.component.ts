import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  constructor(private router: Router) {}

    navigateToHome(event:Event) {
      event.preventDefault()
this.router.navigateByUrl("/products")}


  searchResult: string='';
getSearchedValue(value: string) {
this.searchResult=value;
}

}
