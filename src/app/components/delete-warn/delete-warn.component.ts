import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PersonInfo } from 'src/app/interfaces/PersonInfo';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-delete-warn',
  templateUrl: './delete-warn.component.html',
  styleUrls: ['./delete-warn.component.css']
})
export class DeleteWarnComponent {
  selectedPerson: PersonInfo = this.personService.getSelectedPerson();

  constructor(private dataService: DataService, private personService: PersonService) { }

  handleDelete() {
    this.dataService.deletePersonFromData(this.selectedPerson.id);
  }
  handleCancle() {
    console.log('cancel');
  }
}
