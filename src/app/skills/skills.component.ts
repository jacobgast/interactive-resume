import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this.route.snapshot.data['skills'];
  }

}
