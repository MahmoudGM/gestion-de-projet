import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  tempProject: any;
  constructor() { }

  ngOnInit() {
    this.tempProject = {};
  }

  add() {
    console.log(this.tempProject);
  }

}
