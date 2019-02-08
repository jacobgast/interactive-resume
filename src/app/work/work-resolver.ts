import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Work } from './work';
import { DataService } from '../data.service';

@Injectable()
export class WorkResolver implements Resolve<Work[]> {

  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getWork();
  }
}
