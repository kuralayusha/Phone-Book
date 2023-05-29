import { Component, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonService } from 'src/app/services/person.service';
import { DataService } from 'src/app/services/data.service';

import { PersonInfo } from 'src/app/interfaces/PersonInfo';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
})
export class PhoneBookComponent implements DoCheck {
  // -> list of all contacts
  contactsList: PersonInfo[] = [];

  //  -> subscription to dataService 
  dataUpdateSubscription: Subscription | undefined;

  // filteredContactsList -> list of filtered contacts
  searchTerm: any;
  filteredContactsList: PersonInfo[] = [];

  // -> boolean variables to show or hide components
  showAddContact: any = false;
  showEditContact: boolean = false;
  showDeleteContact: boolean = false;

  // -> loads data from dataService
  loadData() {
    this.contactsList = this.dataService.getDatas();
  }

  // -> recive data from child components
  reciveSetAddToFalse($event: any) {
    this.showAddContact = $event;
    this.searchTerm = '';
  }
  reciveSetEditToFalse($event: any) {
    this.showEditContact = $event;
    this.searchTerm = '';
  }
  reciveSetDeleteToFalse($event: any) {
    this.showDeleteContact = $event;
    this.searchTerm = '';
  }

  // check if data is updated every time
  ngDoCheck(): void {
    this.loadData();
  }

  handleAddPersonComponent() {
    this.showAddContact = true;
  }

  handleEditPersonComponent(person: PersonInfo) {
    this.showEditContact = true;
    this.personService.setSelectedPerson(person);
  }

  handleDeletePersonComponent(person: PersonInfo) {
    this.showDeleteContact = true;
    this.personService.setSelectedPerson(person);
  }

  onSearch(searchTerm: any) {
    this.searchTerm = searchTerm;
    this.filteredPersonsList()
  }

  // -> filters the list of contacts if the search term is not empty
  filteredPersonsList() {
    if (this.searchTerm === '') {      
      return this.contactsList;
    } else {
      return this.filteredContactsList = this.contactsList.filter(person =>
        person.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        person.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        person.phone?.toString().includes(this.searchTerm)
      );
      
    }
  }

  constructor(
    private personService: PersonService,
    private dataService: DataService
  ) {}
}