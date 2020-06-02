import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Variables} from './Variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TrustSchoolProject';
  selected = true;
  constructor(private router: Router, private Variable: Variables) { }

  ngOnInit() {
    this.selected = this.Variable.selected;
  }
}
