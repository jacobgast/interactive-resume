import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

}
