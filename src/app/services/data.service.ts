import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PersonInfo } from '../interfaces/PersonInfo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storageKey = 'phoneBookData'; // Adjust the storage key according to your application
  private dataUpdateSubject = new Subject<void>();
  
  // sets the data to the local storage
  setDatas(data: any[]) {
    const newData = [...data];
    localStorage.setItem(this.storageKey, JSON.stringify(newData));
    this.dataUpdateSubject.next();
  }

  // returns the data from the local storage
  getDatas(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // adds the new contact to the data
  addPersonToData(person: any) {
    const data = this.getDatas();
    const newData = [...data, person];
    this.setDatas(newData);
  }

  // updates the selected contact from the data
  updatePersonFromData(updatedPerson: any) {
    const data = this.getDatas();
    const updatedData = data.map((person) => {
      if (person.id === updatedPerson.id) {
        return updatedPerson;
      }
      return person;
    });
    this.setDatas(updatedData);
  }

  // deletes the selected contact from the data
  deletePersonFromData(personId: any) {
    const data = this.getDatas();
    const updatedData = data.filter((person) => person.id !== personId);
    this.setDatas(updatedData);
  }

  // when a new contact is added, this function is called to create a new id
  createId() {
    const data = this.getDatas();
    if (data.length === 0) {
      return 1;
    }
    const ids = data.map((person) => person.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  // this observable is used to notify the components when the data is updated
  getDataUpdateObservable(): Observable<void> {
    return this.dataUpdateSubject.asObservable();
  }

  constructor() {}
}
