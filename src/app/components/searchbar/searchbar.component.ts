import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTerm: any = "";
  @Output() searchEvent = new EventEmitter<any>();
  
  ngDoCheck(): void {
    console.log(this.searchTerm);
  }
  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
