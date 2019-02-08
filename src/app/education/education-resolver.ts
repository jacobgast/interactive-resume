import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Education } from './education';
import { DataService } from '../data.service';

@Injectable()
export class EducationResolver implements Resolve<Education[]> {

  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getEducation();
  }
}
