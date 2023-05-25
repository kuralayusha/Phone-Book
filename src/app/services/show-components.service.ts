import { Injectable } from '@angular/core';
import { PersonInfo } from '../interfaces/PersonInfo';

@Injectable({
  providedIn: 'root',
})
export class ShowComponentsService {
  showAddPersonComponent: boolean = false;
  showEditPersonComponent: boolean = false;
  showDeletePersonComponent: boolean = false;
  renderPage: boolean = false;

  getAddPersonComponent() {
    return this.showAddPersonComponent;
  }

  setTrueAddPerson() {
    this.showAddPersonComponent = true;
    console.log('showAddPersonComponent: ' + this.showAddPersonComponent);
  }

  setFalseAddPerson() {
    this.showAddPersonComponent = false;
    console.log('showAddPersonComponent: ' + this.showAddPersonComponent);
  }

  showEditPerson() {
    this.showEditPersonComponent = !this.showEditPersonComponent;
    console.log('showEditPersonComponent: ' + this.showEditPersonComponent);
  }

  showDeletePerson() {
    this.showDeletePersonComponent = !this.showDeletePersonComponent;
    console.log('showDeletePersonComponent: ' + this.showDeletePersonComponent);
  }

  renderPageFunc() {
    this.renderPage = !this.renderPage;
    console.log('renderPage: ' + this.renderPage);
  }

  constructor() {}
}
