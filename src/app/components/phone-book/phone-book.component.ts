import { Component } from '@angular/core';
import { ShowComponentsService } from 'src/app/show-components.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  showComponentsService = new ShowComponentsService();
  
  handleAddPersonComponent(){
    this.showComponentsService.showAddPerson();
  }
}
