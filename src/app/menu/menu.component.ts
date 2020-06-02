import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Variables} from '../Variables';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  link = [];

  constructor(private router: Router, private Variable: Variables) {
  }

  ngOnInit() {
  }

  newClasse() {
    this.Variable.selected = true;
    this.link = ['NewClasse'];
    this.router.navigate(this.link);
  }
}
