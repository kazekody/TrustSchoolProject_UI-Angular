import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.scss']
})
export class NewClasseComponent implements OnInit {
  libelle: string;
  filiere: string;
  niveau: string;
  response: any;
  link = [];
  url = 'http://localhost:8080/InscriptionClasse/enregistrement/';

  constructor(private router: Router, private http: HttpClient, private variable: Variables) {
  }

  ngOnInit() {
  }

  Annuler() {

  }

  Valider() {
    this.http.post(this.url + this.libelle + '/' + this.filiere + '/' + this.niveau, this.filiere).subscribe(
      (response) => {
        this.response = response;
        if (this.response.returnMsg === 'success') {
          console.log('Enregistrement reussi !');
          this.link = ['SuccessClasse'];
          this.router.navigate(this.link);
        } else {
          console.log('Echec !');
        }

      },
      (error) => {
        console.log('Erreur', error);
      },
      () => {
        console.log('Enregistrement reussi et termine !');
      }
    );
  }
}

