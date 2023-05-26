import { Component, OnInit, OnDestroy, DoCheck, Input } from '@angular/core';
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
  filteredContactsList: PersonInfo[] = [];
  contactsList: PersonInfo[] = [];
  dataUpdateSubscription: Subscription | undefined;
  searchTerm: any;

  showAddContact: any = false;
  showEditContact: boolean = false;
  showDeleteContact: boolean = false;

  reciveSetAddToFalse($event: any) {
    this.showAddContact = $event;
  }
  reciveSetEditToFalse($event: any) {
    this.showEditContact = $event;
  }
  reciveSetDeleteToFalse($event: any) {
    this.showDeleteContact = $event;
  }

  constructor(
    private personService: PersonService,
    private dataService: DataService
  ) {}
  
  ngDoCheck(): void {
    this.loadData();
    // console.log(this.showAddContact); 
    console.log("searchTearm: "+this.searchTerm);
    console.log(this.filteredContactsList);
    
  }

  handleAddPersonComponent() {
    this.showAddContact = true;
  }

  handleEditPersonComponent(person: PersonInfo) {
    this.showEditContact = true;
    this.personService.setSelectedPerson(person);
    // console.log(person);
  }

  handleDeletePersonComponent(person: PersonInfo) {
    this.showDeleteContact = true;
    this.personService.setSelectedPerson(person);
    // console.log(person);
  }

  loadData() {
    this.contactsList = this.dataService.getDatas();
  }

  onSearch(searchTerm: any) {
    this.searchTerm = searchTerm;
    this.filteredPersonsList()
  }

  filteredPersonsList() {
    if (this.searchTerm === '') {      
      return this.contactsList;
    } else {
      return this.filteredContactsList = this.contactsList.filter(person =>
        person.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        person.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        person.phone.toString().includes(this.searchTerm)
      );
      
    }
  }
}