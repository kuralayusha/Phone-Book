import { Component, OnInit } from '@angular/core';
import {PERSONS} from "../../mock-person"
import { PersonService } from 'src/app/services/person.service';
import {PersonInfo} from "src/app/interfaces/PersonInfo"
import { find } from 'rxjs';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  id: any = false;
  persons: PersonInfo[] = PERSONS;
  personService = new PersonService();
  person: any = null

  constructor() {
    this.id = this.personService.getSelectedPerson();
    this.id && this.findPersonInfo(this.id)
    
    console.log("id: " + this.id);
    console.log("person: " + this.person);
    
  }

  findPersonInfo(id: number) {
    this.person = this.persons.find(person => person.id === id);
  }

  ngOnInit(): void {
    
  }
  
  savePersonChanges() {
    // Burada, yapılan değişiklikleri kaydetmek için gerekli işlemleri gerçekleştirebilirsiniz.
  }

  cancelEdit() {
    // Burada, düzenleme işlemini iptal etmek için gerekli işlemleri gerçekleştirebilirsiniz.
  }
}
