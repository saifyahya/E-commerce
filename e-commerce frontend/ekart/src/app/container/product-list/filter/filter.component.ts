import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {


selectedFilter:string="all";

@Output() filterSelectionEvent:EventEmitter<String>=new EventEmitter();

select(){
  console.log(this.selectedFilter)
  this.filterSelectionEvent.emit(this.selectedFilter)
}
}
