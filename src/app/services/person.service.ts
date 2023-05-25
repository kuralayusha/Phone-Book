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
