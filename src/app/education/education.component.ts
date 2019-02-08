import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from './education';
import * as _ from 'lodash';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: Education[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.education = this.route.snapshot.data['education'];
    this.education = _.orderBy(this.education, ['endYear', 'endMonth'], ['desc', 'desc']);
  }

}
