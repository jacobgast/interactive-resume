import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Project } from './project';
import { DataService } from '../data.service';

@Injectable()
export class ProjectResolver implements Resolve<Project[]> {

  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getProjects();
  }
}
