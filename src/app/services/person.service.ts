// this service is used to share data between components
// basicly it takes the data from the selected contact 
// and shares it with the other components

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private selectedPerson: any;

  constructor() {}

  setSelectedPerson(person: any) {
    this.selectedPerson = person;
  }

  getSelectedPerson() {
    return this.selectedPerson;
  }
}
