import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.route.snapshot.data['projects'];
  }

}
