import { Component } from '@angular/core';

import { ShowComponentsService } from 'src/app/services/show-components.service';
import { PersonService } from 'src/app/services/person.service';

import {PersonInfo} from "src/app/interfaces/PersonInfo"
import {PERSONS} from "../../mock-person"

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  showComponentsService = new ShowComponentsService();
  personService = new PersonService();
  
  persons: PersonInfo[] = PERSONS;
  
  

  
  
  handleAddPersonComponent(){
    this.showComponentsService.showAddPerson();
  }

  handleEditPersonComponent(person: PersonInfo){
    this.showComponentsService.showEditPerson();
    // write a function that will take the person object and sends it to the edit-person component
    this.personService.selectPerson(person);
    console.log(person);
  }

  handleDeletePersonComponent(person: PersonInfo){
    this.showComponentsService.showDeletePerson();
    console.log(person);
  }
}
