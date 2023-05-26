import { Component,Output,EventEmitter } from '@angular/core';
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
  setDeleteToFalse: any = false;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dataService: DataService, private personService: PersonService) { }

  handleDelete() {
    this.dataService.deletePersonFromData(this.selectedPerson.id);
    this.messageEvent.emit(this.setDeleteToFalse);
  }
  handleCancle() {
    this.messageEvent.emit(this.setDeleteToFalse);
  }
}
