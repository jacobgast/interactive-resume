import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from './contact';
import { DataService } from '../data.service';

@Injectable()
export class ContactResolver implements Resolve<Contact[]> {

  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getContacts();
  }
}
