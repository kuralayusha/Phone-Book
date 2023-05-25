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
  renderPage = this.showComponentsService.renderPageFunc();

  constructor(
    private personService: PersonService,
    private dataService: DataService
  ) {}

  ngDoCheck(): void {
    this.loadData();
  }

  handleAddPersonComponent() {
    this.showComponentsService.showAddPerson();
  }

  handleEditPersonComponent(person: PersonInfo) {
    this.showComponentsService.showEditPerson();
    // write a function that will take the person object and sends it to the edit-person component
    this.personService.setSelectedPerson(person);
    console.log(person);
  }

  handleDeletePersonComponent(person: PersonInfo) {
    this.showComponentsService.showDeletePerson();
    console.log(person);
  }

  loadData() {
    this.personsList = this.dataService.getDatas();
  }
}
