import { Component, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { PERSONS } from '../../mock-person';
import { PersonService } from 'src/app/services/person.service';
import { PersonInfo } from 'src/app/interfaces/PersonInfo';
import { find } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit, DoCheck {
  selectedPerson: PersonInfo = this.personService.getSelectedPerson();
  changedPerson: PersonInfo = {
    id: this.selectedPerson.id,
    firstName: this.selectedPerson.firstName,
    lastName: this.selectedPerson.lastName,
    phone: this.selectedPerson.phone,
    birthday: this.selectedPerson.birthday,
  };
  
  setEditToFalse: any = false;
  @Output() messageEvent = new EventEmitter<string>();


  constructor(private personService: PersonService, private dataService: DataService) {
    console.log(this.selectedPerson);
  }

  ngDoCheck(): void {
    console.log(this.changedPerson);
  }

  onSave() {
    this.dataService.updatePersonFromData(this.changedPerson);
    this.messageEvent.emit(this.setEditToFalse);
  }

  onCancel() {
    this.messageEvent.emit(this.setEditToFalse);
  }

  ngOnInit(): void {}
}
