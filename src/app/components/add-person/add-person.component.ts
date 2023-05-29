import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { PersonInfo } from 'src/app/interfaces/PersonInfo';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  createdPerson: PersonInfo = {
    id: null,
    firstName: '',
    lastName: '',
    phone: undefined,
    birthday: null,
  };

  setAddToFalse: any = false;

  @Output() messageEvent = new EventEmitter<string>();

  // handleBirthday(birthday: any) {
  //   // take the birthday string and delete from the start of "t" character to the end of the string
  //   let birthdayString = birthday.slice(1, birthday.length);

  //   return (this.createdPerson.birthday = birthdayString);
  // }

  onAdd() {
    if (this.createdPerson.firstName && this.createdPerson.phone) {
      // if (this.createdPerson.birthday) {
      //   this.handleBirthday(this.createdPerson.birthday);
      // }
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
