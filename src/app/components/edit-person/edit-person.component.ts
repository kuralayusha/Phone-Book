import { Component, OnInit, DoCheck } from '@angular/core';
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


  constructor(private personService: PersonService, private dataService: DataService) {
    // this.selectedPerson = this.personService.getSelectedPerson();
    console.log(this.selectedPerson);
    console.log(this.changedPerson);
    
  }

  ngDoCheck(): void {
    console.log(this.changedPerson);
  }

  onSave() {
    this.dataService.updatePersonFromData(this.changedPerson);
  }

  onCancel() {
    // TODO: cancel the edit
  }

  ngOnInit(): void {}
}
