import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logintemp: any;
  constructor() {}

  ngOnInit() {
    this.logintemp = {};
  }
  add() {
    console.log(this.logintemp);
  }

}
