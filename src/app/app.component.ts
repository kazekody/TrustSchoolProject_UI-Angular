import { identifierModuleUrl } from '@angular/compiler';
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
  link = [];
  constructor(private router: Router, private Variable: Variables) { }

  ngOnInit() {
  }
  newClasse() {
    this.selected = false;
    this.link = ['/NewClasse'];
    this.router.navigate(this.link);
  }
  newEleve() {
    this.selected = false;
    this.link = ['/NewEleve/1'];
    this.router.navigate(this.link);
  }
}
