import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variables } from '../Variables';

@Component({
  selector: 'app-new-eleve2',
  templateUrl: './new-eleve2.component.html',
  styleUrls: ['./new-eleve2.component.scss']
})
export class NewEleve2Component implements OnInit {
  link;
  url = 'http://localhost:8080/InscriptionClasse/listerClasse';
  response: any;
  listeClasseLibelle: string [] = [];
  constructor(private router: Router, private http: HttpClient, private variable: Variables) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      (response) => {
        this.response = response;
        this.variable.listeClasse = this.response.returnValue;
        for (let i = 1; i <= this.variable.listeClasse.length; i++) {
        this.listeClasseLibelle.push(this.response.returnValue[ i - 1].libelle);
        }
        console.log(this.listeClasseLibelle);

      },
      (error) => {
        console.log('Erreur', error, HttpErrorResponse);
      },
      () => {
        console.log('Succès !');
      }
      );
  }

  Valider(newEleve) {
    console.log(newEleve);
    this.link = ['SuccessEleve'];
    this.router.navigate(this.link);
  }

}
