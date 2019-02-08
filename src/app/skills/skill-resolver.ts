import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Skill } from './skill';
import { DataService } from '../data.service';

@Injectable()
export class SkillResolver implements Resolve<Skill[]> {

  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getSkills();
  }
}
