import { Component, Output, EventEmitter,OnInit  } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { PersonInfo } from 'src/app/interfaces/PersonInfo';

import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent  {
  
  createdPerson: PersonInfo = {
    id: null,
    firstName: '',
    lastName: '',
    phone: undefined,
    birthday: null,
  };

  setAddToFalse: any = false;

  @Output() messageEvent = new EventEmitter<string>();

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

  constructor(
    private dataService: DataService,
    private primengConfig: PrimeNGConfig
  ) {}
}
