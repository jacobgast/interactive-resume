import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from './work';
import * as _ from 'lodash';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work: Work[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.work = this.route.snapshot.data['work'];
    this.work = _.orderBy(this.work, ['endYear', 'endMonth'], ['desc', 'desc']);
  }

}
