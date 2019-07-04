import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  groupAddTemp: any;
  checker: any;
  checks: string[] = ['oui', 'non'];
  tempProject: any;

  constructor() {
  }

  ngOnInit() {
    this.tempProject = {};
  }

}
