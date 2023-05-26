import { Component, Output, EventEmitter } from '@angular/core';

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
  
  setAddToFalse: any = false;

  @Output() messageEvent = new EventEmitter<string>();


  
  dataService = new DataService();
  createdPerson: PersonInfo = {
    id: null,
    firstName: '',
    lastName: '',
    phone: '',
    birthday: null,
  };

  constructor(
    private showComponentsService: ShowComponentsService
  ) {}

  onAdd() {
    if (this.createdPerson.firstName && this.createdPerson.phone) {
      this.createdPerson.id = this.dataService.createId();
      this.dataService.addPersonToData(this.createdPerson);
      this.messageEvent.emit(this.setAddToFalse);      
    } else {
      alert('Please enter a name and a phone number!');
    }
  }

  onCancel() {
    this.messageEvent.emit(this.setAddToFalse);
  }
}
