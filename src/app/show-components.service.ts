import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowComponentsService {
  showAddPersonComponent: boolean = false;
  showEditPersonComponent: boolean = false;
  showSearchbarComponent: boolean = false;
  showPersonListComponent: boolean = false;

  // write a function to toggle show the add-person component
  showAddPerson() {
    this.showAddPersonComponent =  !this.showAddPersonComponent;
    console.log("showAddPersonComponent: " + this.showAddPersonComponent);
    
  }

  constructor() { }
}
