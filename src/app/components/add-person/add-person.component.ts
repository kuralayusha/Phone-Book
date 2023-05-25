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
  createdPerson: PersonInfo = {
    id: null,
    firstName: '',
    lastName: '',
    phone: '',
    birthday: null,
  };
  showAddComponent: boolean = this.showComponentsService.getAddPersonComponent();

  constructor(
    private showComponentsService: ShowComponentsService
  ) {
    this.showAddComponent = this.showComponentsService.getAddPersonComponent();
    console.log(this.createdPerson);
  }

  onAdd() {
    if (this.createdPerson.firstName && this.createdPerson.phone) {
      this.createdPerson.id = this.dataService.createId();
      this.dataService.addPersonToData(this.createdPerson);
      this.showAddComponent = false;
      
    }
    console.log(this.createdPerson);

  }

  onCancel() {
    console.log(this.showAddComponent);
    this.showComponentsService.setFalseAddPerson();
  }
}
