import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShowComponentsService } from 'src/app/services/show-components.service';
import { PersonService } from 'src/app/services/person.service';
import { DataService } from 'src/app/services/data.service';

import { PersonInfo } from 'src/app/interfaces/PersonInfo';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
})
export class PhoneBookComponent implements DoCheck {
  showComponentsService = new ShowComponentsService();
  personsList: PersonInfo[] = [];
  dataUpdateSubscription: Subscription = new Subscription();
  showAddPersonComponent: boolean = false;
  searchTerm: string = '';
  filteredContacts: any[] = []
  filterIsActive: boolean = false;


  filterContacts() {
    this.filteredContacts = this.personsList.filter(contact =>
      contact.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.filteredContacts);
    
  }
  

  constructor(
    private personService: PersonService,
    private dataService: DataService
  ) {
    this.personsList = this.dataService.getDatas();
    this.filteredContacts = this.personsList;
    // const storedContacts = localStorage.getItem('phoneBookData');
    // if (storedContacts) {
    //   this.personsList = JSON.parse(storedContacts);
    // }
    
  }

  checkFilter() {
    if (this.searchTerm) {
      this.filterIsActive = true;
    } else {
      this.filterIsActive = false;
    }
  }
  
  ngDoCheck(): void {
    this.loadData();
    console.log(this.personsList.length, this.filteredContacts.length);
    this.checkFilter();
  }

  handleAddPersonComponent() {
    this.showComponentsService.setTrueAddPerson();
  }

  handleEditPersonComponent(person: PersonInfo) {
    this.showComponentsService.showEditPerson();
    this.personService.setSelectedPerson(person);
    console.log(person);
  }

  handleDeletePersonComponent(person: PersonInfo) {
    this.showComponentsService.showDeletePerson();
    this.personService.setSelectedPerson(person);
    console.log(person);
  }

  loadData() {
    this.personsList = this.dataService.getDatas();
  }

  
}