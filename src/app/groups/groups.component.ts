import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupstemp: any;
  constructor() { }

  ngOnInit() {
    this.groupstemp = {};
  }

}
