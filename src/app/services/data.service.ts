import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PersonInfo } from '../interfaces/PersonInfo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storageKey = 'phoneBookData'; // Adjust the storage key according to your application
  private dataUpdateSubject = new Subject<void>();
  
  setDatas(data: any[]) {
    const newData = [...data];
    localStorage.setItem(this.storageKey, JSON.stringify(newData));
    this.dataUpdateSubject.next();
  }

  getDatas(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addPersonToData(person: any) {
    const data = this.getDatas();
    const newData = [...data, person];
    this.setDatas(newData);
  }

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

  deletePersonFromData(personId: any) {
    const data = this.getDatas();
    const updatedData = data.filter((person) => person.id !== personId);
    this.setDatas(updatedData);
  }

  createId() {
    // look to the data and find the highest id and add 1 to it
    // if there is no data, return 1
    const data = this.getDatas();
    if (data.length === 0) {
      return 1;
    }
    const ids = data.map((person) => person.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  getDataUpdateObservable(): Observable<void> {
    return this.dataUpdateSubject.asObservable();
  }

  constructor() {}
}
