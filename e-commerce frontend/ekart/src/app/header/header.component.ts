import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

@Output()
sendSearchResultToApp:EventEmitter<string>=new EventEmitter();

  searchResult: string='';
getSearchedValue(value: string) {
this.searchResult=value;
this.sendSearchResultToApp.emit(this.searchResult);
}

}
