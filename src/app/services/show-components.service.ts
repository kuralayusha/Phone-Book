import { Injectable } from '@angular/core';
import { PersonInfo } from '../interfaces/PersonInfo';

@Injectable({
  providedIn: 'root'
})
export class ShowComponentsService {

  showAddPersonComponent: boolean = false;
  showEditPersonComponent: boolean = false;
  showDeletePersonComponent: boolean = false;

  // write a function to toggle show the add-person component
  showAddPerson() {
    this.showAddPersonComponent =  !this.showAddPersonComponent;
    console.log("showAddPersonComponent: " + this.showAddPersonComponent);
  }

  showEditPerson() {
    this.showEditPersonComponent =  !this.showEditPersonComponent;
    console.log("showEditPersonComponent: " + this.showEditPersonComponent);
  }

  showDeletePerson() {
    this.showDeletePersonComponent =  !this.showDeletePersonComponent;
    console.log("showDeletePersonComponent: " + this.showDeletePersonComponent);
  }

  constructor() { }
}
