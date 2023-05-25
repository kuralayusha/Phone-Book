import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../../mock-person';
import { PersonService } from 'src/app/services/person.service';
import { PersonInfo } from 'src/app/interfaces/PersonInfo';
import { find } from 'rxjs';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  selectedPerson: any;

  constructor(private personService: PersonService) {
    this.selectedPerson = this.personService.getSelectedPerson();
    console.log(this.selectedPerson);
  }

  onSave() {
    // TODO: save the person
  }

  onCancel() {
    // TODO: cancel the edit
  }

  ngOnInit(): void {}
}
