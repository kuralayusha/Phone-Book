import { Component } from '@angular/core';

import { ShowComponentsService } from 'src/app/services/show-components.service';
import { PersonService } from 'src/app/services/person.service';
import { DataService } from 'src/app/services/data.service';

import { PersonInfo } from 'src/app/interfaces/PersonInfo';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  dataService = new DataService();
  showComponentsService = new ShowComponentsService();
  createdPerson: PersonInfo = {
    id: null,
    firstName: '',
    lastName: '',
    phone: '',
    birthday: null,
  };

  constructor(
    dataService: DataService,
    personService: PersonService,
    showComponentsService: ShowComponentsService
  ) {
    console.log(this.createdPerson);
  }

  onAdd() {
    this.createdPerson.id = this.dataService.createId();
    if (this.createdPerson.firstName && this.createdPerson.phone) {
      this.dataService.addPersonToData(this.createdPerson);
    }
    console.log(this.createdPerson);
    this.showComponentsService.renderPageFunc();
  }

  onCancel() {}
}
