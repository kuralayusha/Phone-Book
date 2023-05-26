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
  // showComponentsService = new ShowComponentsService();
  personsList: PersonInfo[] = [];
  dataUpdateSubscription: Subscription = new Subscription();
  // showAddPersonComponent: boolean = false;
  searchTerm: string = '';
  showEditContact: boolean = false;
  showDeleteContact: boolean = false;

  
  showAddContact: any = false;
  showAddContactChangeMessage: any;

  reciveSetAddToFalse($event: any) {
    this.showAddContact = $event;
  }

  constructor(
    private personService: PersonService,
    private dataService: DataService
  ) {}
  
  ngDoCheck(): void {
    this.loadData();
    console.log(this.showAddContact);   
  }

  handleAddPersonComponent() {
    this.showAddContact = true;
  }

  handleEditPersonComponent(person: PersonInfo) {
    this.showEditContact = true;
    this.personService.setSelectedPerson(person);
    console.log(person);
  }

  handleDeletePersonComponent(person: PersonInfo) {
    this.personService.setSelectedPerson(person);
    console.log(person);
  }

  loadData() {
    this.personsList = this.dataService.getDatas();
  }

  
}