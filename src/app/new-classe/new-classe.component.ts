import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.scss']
})
export class NewClasseComponent implements OnInit {
libelle: string;
filiere: string;
niveau: string;
  constructor() { }

  ngOnInit() {
  }

}
