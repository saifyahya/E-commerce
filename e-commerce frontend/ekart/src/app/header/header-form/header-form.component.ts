import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'header-form',
  templateUrl: './header-form.component.html',
  styleUrl: './header-form.component.css'
})
export class HeaderFormComponent {

  @Output() searchedValue: EventEmitter<string> = new EventEmitter();

  getSearchedInput(event: Event, searchInputEle: HTMLInputElement) {
    event.preventDefault();
    this.searchedValue.emit(searchInputEle.value);
  }



}
