
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-eleve',
  templateUrl: './new-eleve.component.html',
  styleUrls: ['./new-eleve.component.scss']
})
export class NewEleveComponent implements OnInit {
  link;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Suivant(newEleve) {
    console.log(newEleve);
    this.link = ['NewEleve/2'];
    this.router.navigate(this.link);
  }
}
