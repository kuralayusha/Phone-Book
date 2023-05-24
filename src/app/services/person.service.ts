import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public selectedPersonId: any;

  // its a function to select a persons id to print it out in the edit-person component
   selectPerson(person: any) {
    this.selectedPersonId = person.id;
    console.log("selectedPersonID: " + this.selectedPersonId);
    return this.selectedPersonId;
  }

  getSelectedPerson() {
    if (this.selectedPersonId) {
      return this.selectedPersonId;
    }
  }

  constructor() {}
}
